"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "AI Task Automation",
    text: "Automatically plan, prioritize, and complete your daily tasks using smart AI insights designed to boost focus and efficiency.",
    image: "/task-automation-preview.png",
  },
  {
    title: "Finance Tracking",
    text: "Gain real-time visibility into your spending, income, and cash flow to stay in control of your financial goals.",
    image: "/finance-tracker.png",
  },
  {
    title: "Smart Dashboards",
    text: "Visualize all your productivity metrics and financial analytics in one customizable dashboard.",
    image: "/smart-dashboard.png",
  },
];

export default function FeaturesSection() {
  return (
    <section className="max-w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-12 md:py-18">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          className="flex flex-col items-center gap-6 p-6 md:p-8 m-4 md:m-6 max-w-sm"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          viewport={{ once: true }}
        >
          <div className="card">
            <Image
              src={f.image}
              alt={f.title}
              width={400}
              height={300}
              className="object-contain w-full h-auto"
            />
          </div>
          <h3 className="text-xl font-semibold">{f.title}</h3>
          <p className="text-muted">{f.text}</p>
        </motion.div>
      ))}
    </section>
  );
}
