"use client";

import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import  PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen mx-w font-sans overflow-hidden">
      {/* 🌟 Hero Section */}
      <HeroSection />

      {/* 🚀 Features Section */}
      <FeaturesSection />

      {/* 💡 Pricing Section */}
      <PricingSection />
      {/* 🧭 Footer */}
      <Footer />
    </main>
  );
}
