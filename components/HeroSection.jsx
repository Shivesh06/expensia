"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import Link from 'next/link';
import Image from "next/image";
import { useRef, useEffect } from "react";
import FeaturesSection from "./FeaturesSection.jsx";

const HeroSection = () => {

  const imageRef = useRef();

  useEffect( () => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const scrollThreshold = 100

      if(scrollPosition>scrollThreshold){
        imageElement.classList.add("scrolled")
      } else {
        imageElement.classList.remove("scrolled")
      }
    }

    window.addEventListener("scroll",handleScroll)

    return () => window.removeEventListener("scroll",handleScroll)
  })

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-50 overflow-hidden">

      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

      {/* Background glow */}
      <div className="hero-glow" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: '-2s' }} />

      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up-delay-1">
          The <span className="gradient-text">intelligent partner</span>
          <br />
          in building and protecting your wealth.
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-up-delay-2">
          Stop guessing. Use Expensia’s AI to track expenses, optimize budgets, and forecast your financial future in seconds.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3">
          <Link href="/dashboard">
            <Button size = "lg" className="px-8 h-12 text-base rounded-full bg-gradient-primary hover:shadow-[0_0_20px_hsl(173_80%_50%/0.5)] transition-all duration-300 hover:scale-105 border-0">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button size = "lg" variant="outline" className="px-8 h-12 text-base rounded-full border-border/50 hover:bg-secondary/80 backdrop-blur-sm transition-all duration-300">
              Watch Demo
              <PlayCircle className="mr-2 w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image" ref={imageRef}>
            <Image
              src="/banner0.png"
              width={1280}
              height={720}
              alt="Dashboard Preview"
              className="rounded-lg shadow-2xl border mx-auto"
              priority
              quality={100}
              />
          </div>
        </div>

        <FeaturesSection />

      </div>
    </section>
  );
};

export default HeroSection;
