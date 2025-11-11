"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PricingSection() {
  return (
    <section className="max-w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-12 md:py-24">
      <motion.section
        className="max-w-4xl w-full px-6 md:px-12 py-20 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-muted mb-8">
          Start free and upgrade anytime as your needs grow. No hidden fees —
          just productivity and clarity.
        </p>

        <div className="flex justify-center gap-6 flex-col md:flex-row">
          <div className="card-section">
            <h3 className="text-xl font-semibold mb-2">Free Plan</h3>
            <p className="text-muted mb-4">
              Perfect for individuals getting started.
            </p>
            <p className="text-3xl font-bold mb-6">$0</p>
            <Link href="/signup" className="btn w-full">
              Get Started
            </Link>
          </div>

          <div className="card-section highlighted">
            <h3 className="text-xl font-semibold mb-2 text-accent">Pro Plan</h3>
            <p className="text-muted mb-4">
              Ideal for professionals and small teams.
            </p>
            <p className="text-3xl font-bold mb-6">
              $9<span className="text-base text-muted">/mo</span>
            </p>
            <Link href="/signup" className="btn w-full">
              Upgrade Now
            </Link>
          </div>
        </div>
      </motion.section>
    </section>
  );
}
