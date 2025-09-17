"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useRef } from "react";

const HeroSection = () => {

    const imageRef = useRef();

    useEffect(() => {
        const imageElement = imageRef.current;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;

            if (scrollPosition > scrollThreshold) {
                imageElement.classList.add("scrolled");
            } else {
                imageElement.classList.remove("scrolled");
            }
        };

        window.addEventListener("scroll", handleScroll); 
        return() => window.removeEventListener("scroll", handleScroll);

    }, [])


  return (
    <div className="pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg-text-[105px] pb-6 gradient-title">
          Smart Finance Management Starts here <br /> — Powered by AI
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
          Transform your spending habits with AI. Get real-time insights,  automated tracking, and personalized tips to save smarter and effortlessly with real-time insights.
        </p>

        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>

          <Link href="www.google.com">
            <Button size="lg" variant="outline" className="px-8">
              Watch Demo
            </Button>
          </Link>
        </div>

        <div className="hero-image-wrapper">
          <div ref={imageRef} className="hero-image">
            <Image
              src="/banner.png"
              width={2000}
              height={800}
              alt="Dashboard Preview"
              priority
              className="rounded-lg shadow-2xl border mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
