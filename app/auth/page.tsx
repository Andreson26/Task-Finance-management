"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaArrowLeft } from "react-icons/fa";
import styles from "./Auth.module.css";

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    password?: string;
  }>({});
  const router = useRouter();

  const validate = () => {
    const newErrors: { fullName?: string; email?: string; password?: string } =
      {};

    if (!isSignIn) {
      if (!fullName.trim()) newErrors.fullName = "Full name is required";
      else if (fullName.trim().length < 2)
        newErrors.fullName = "Name must be at least 2 characters";
    }

    if (!email) newErrors.email = "Email is required";
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
      newErrors.email = "Please enter a valid email";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert(
        `${isSignIn ? "Logging in" : "Signing up"} with ${
          isSignIn ? email : `${fullName} (${email})`
        }`
      );
    }
  };

  return (
    <div className={styles.container}>
      {/* Back Button */}
      <button onClick={() => router.push("/")} className={styles.backButton}>
        <FaArrowLeft size={18} />
        <span>Back</span>
      </button>

      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.logo}>A</div>

        <h1 className={styles.title}>
          {isSignIn ? "Welcome Back!" : "Create an Account"}
        </h1>

        <p className={styles.switchText}>
          {isSignIn ? "Don’t have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsSignIn(!isSignIn)}
            className={styles.link}
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </button>
        </p>

        <button className={styles.socialBtn}>
          <FcGoogle size={20} />
          Continue with Google
        </button>

        <button className={styles.socialBtn}>
          <FaApple size={20} />
          Continue with Apple
        </button>

        <div className={styles.divider}>
          <hr />
          <span>or</span>
          <hr />
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <AnimatePresence mode="wait">
            {!isSignIn && (
              <motion.div
                key="fullname"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`${styles.input} ${
                    errors.fullName ? styles.errorInput : ""
                  }`}
                />
                {errors.fullName && (
                  <p className={styles.errorText}>{errors.fullName}</p>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`${styles.input} ${
              errors.email ? styles.errorInput : ""
            }`}
          />
          {errors.email && <p className={styles.errorText}>{errors.email}</p>}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`${styles.input} ${
              errors.password ? styles.errorInput : ""
            }`}
          />
          {errors.password && (
            <p className={styles.errorText}>{errors.password}</p>
          )}

          <button type="submit" className={styles.submitBtn}>
            {isSignIn ? "Login" : "Sign Up with Email"}
          </button>
        </form>

        {isSignIn && (
          <p className={styles.forgot}>
            <a href="#">Forgot password?</a>
          </p>
        )}

        <p className={styles.terms}>
          By continuing, you agree to our <a href="#">Terms of Service</a> and{" "}
          <a href="#">Privacy Policy</a>.
        </p>

        <p className={styles.help}>
          Need help? <a href="#">Contact Support</a>
        </p>
      </motion.div>
    </div>
  );
}
