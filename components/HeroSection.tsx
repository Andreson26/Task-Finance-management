"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
   <section className="max-w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-12 md:py-18">
      {/* Left: Text */}
      <motion.div
        className="flex flex-col gap-6 max-w-xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
          Boost Your Productivity <br />
          <span className="text-accent">and Master Your Finances</span>
        </h1>
        <p className="text-muted text-lg">
          Stay organized, automate tasks, and track your financial growth with
          our intelligent AI-powered productivity and finance management
          platform.
        </p>

        <div className="flex items-center gap-4 mt-4">
          <Link href="/signup" className="btn">
            Get Started Free
          </Link>
          <Link href="/learn-more" className="btn-outline">
            Learn More
          </Link>
        </div>
      </motion.div>

      {/* Right: Illustration */}
      <motion.div
        className="relative mt-12 md:mt-0"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src="/dashboard-preview.png"
          alt="AI Productivity Dashboard"
          width={800}
          height={800}
          priority
        />
      </motion.div>
    </section>
  );
}

