"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground font-sans overflow-hidden">
      {/* 🌟 Hero Section */}
      <section className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-20 md:py-28">
        {/* Left: Text */}
        <div className="flex flex-col gap-6 max-w-xl">
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
        </div>

        {/* Right: Illustration */}
        <div className="relative mt-12 md:mt-0">
          <Image
            src="/dashboard-preview.png"
            alt="AI Productivity Dashboard Preview"
            width={480}
            height={400}
            className="rounded-2xl shadow-subtle border border-border"
          />
        </div>
      </section>

      {/* 🚀 Features Section */}
      <section className="max-w-7xl w-full px-6 md:px-12 py-20 grid md:grid-cols-3 gap-12 text-center">
        <div className="flex flex-col items-center gap-3">
          <div className="h-14 w-14 flex items-center justify-center bg-accent/10 text-accent rounded-xl">
            📊
          </div>
          <h3 className="text-xl font-semibold">AI Task Automation</h3>
          <p className="text-muted">
            Automatically plan, prioritize, and complete your daily tasks using
            smart AI insights designed to boost your focus and efficiency.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="h-14 w-14 flex items-center justify-center bg-accent/10 text-accent rounded-xl">
            💰
          </div>
          <h3 className="text-xl font-semibold">Finance Tracking</h3>
          <p className="text-muted">
            Gain real-time visibility into your spending, income, and cash flow
            to stay in control of your financial goals and business health.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="h-14 w-14 flex items-center justify-center bg-accent/10 text-accent rounded-xl">
            📈
          </div>
          <h3 className="text-xl font-semibold">Smart Dashboards</h3>
          <p className="text-muted">
            Visualize all your productivity metrics and financial analytics in a
            single, customizable dashboard — powered by clean data and AI.
          </p>
        </div>
      </section>

      {/* 💡 Pricing Section */}
      <section className="max-w-4xl w-full px-6 md:px-12 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-muted mb-8">
          Start free and upgrade anytime as your needs grow. No hidden fees, no
          surprises — just productivity and clarity.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <div className="p-6 rounded-2xl border border-border bg-card shadow-subtle w-72 hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold mb-2">Free Plan</h3>
            <p className="text-muted mb-4">
              Perfect for individuals getting started.
            </p>
            <p className="text-3xl font-bold mb-6">$0</p>
            <Link href="/signup" className="btn w-full">
              Get Started
            </Link>
          </div>

          <div className="p-6 rounded-2xl border border-accent bg-card shadow-subtle w-72 hover:shadow-md transition-all">
            <h3 className="text-xl font-semibold mb-2 text-accent">
              Pro Plan
            </h3>
            <p className="text-muted mb-4">
              Ideal for professionals and small teams.
            </p>
            <p className="text-3xl font-bold mb-6">$9<span className="text-base text-muted">/mo</span></p>
            <Link href="/signup" className="btn w-full">
              Upgrade Now
            </Link>
          </div>
        </div>
      </section>

      {/* 🧭 Footer */}
      <footer className="w-full bg-card border-t border-border py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="font-semibold text-lg mb-2">Company</h4>
            <ul className="space-y-2 text-muted">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">Product</h4>
            <ul className="space-y-2 text-muted">
              <li><Link href="#">Features</Link></li>
              <li><Link href="#">Integrations</Link></li>
              <li><Link href="#">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">Resources</h4>
            <ul className="space-y-2 text-muted">
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Help Center</Link></li>
              <li><Link href="#">API Docs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2">Follow Us</h4>
            <div className="flex gap-4 text-xl text-accent">
              <Link href="#">🐦</Link>
              <Link href="#">💼</Link>
              <Link href="#">🌐</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
