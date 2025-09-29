"use client";

import React, { useState, useEffect, useRef } from 'react';

// --- Data for the Nesway Foods feature cards ---
const neswayFeatures = [
  {
    title: "Cleaner Labels, Better Choices",
    description: "We create products with short, transparent ingredient lists — free from artificial preservatives, or unnecessary additives. Every recipe is crafted for pure taste and real nutrition.",
    imageUrl: "/images/about1.png",
    bgColor: "bg-green-100 dark:bg-green-900",
    textColor: "text-gray-700 dark:text-gray-200",
    customBgColor: "#C3D250"
  },
  {
    title: "Smarter Food Tech, Natural Results",
    description: "We explore every technology that locks in freshness, safety, and nutrition without compromising flavor. The result? Shelf-stable, future-proof food made naturally smarter.",
    imageUrl: "/images/about3.png",
    bgColor: "bg-blue-100 dark:bg-blue-900",
    textColor: "text-gray-700 dark:text-gray-200",
    customBgColor: "#7074B7"
  },
  {
    title: "Rigorous Quality Standards",
    description: "Every batch goes through rigorous testing for texture, taste, and safety. We obsess over consistency so what reaches you is exactly what we promised: high-quality, honest food.",
    imageUrl: "/images/about2.png",
    bgColor: "bg-amber-100 dark:bg-amber-900",
    textColor: "text-gray-700 dark:text-gray-200",
    customBgColor: "#F7D164"
  },
];

// --- Custom Hook for Scroll Animation ---
const useScrollAnimation = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
};

// --- Header Component ---
const NeswayAnimatedHeader = () => {
    const [headerRef, headerInView] = useScrollAnimation();
    const [pRef, pInView] = useScrollAnimation();

    return (
        <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 
                ref={headerRef}
                className={`text-h1 transition-all duration-700 ease-out text-gray-900 dark:text-white ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transformStyle: 'preserve-3d' }}
            >
                3 Ways We Make Better Food For You
            </h2>
            <p 
                ref={pRef}
                className={`text-body-large text-gray-600 dark:text-gray-300 mt-4 transition-all duration-700 ease-out delay-200 ${pInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transformStyle: 'preserve-3d' }}
            >
                Discover how we&apos;re revolutionizing food with innovation, quality, and sustainability
            </p>
        </div>
    );
};

// Main component for Nesway Foods
export function NeswayStickyCards() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 font-sans">
      <div className="px-4 md:px-8">
        <div className="container mx-auto">
          <section className="py-12 lg:py-16 flex flex-col items-center">
            
            <NeswayAnimatedHeader />

            <div className="w-full">
              {neswayFeatures.map((feature, index) => (
                <div
                    key={index}
                    className={`${feature.bgColor} grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-8 p-6 md:p-8 rounded-3xl mb-8 sticky`}
                    style={{ 
                      top: '200px',
                      backgroundColor: feature.customBgColor || undefined
                    }}
                >
                  <div className="flex flex-col justify-center">
                    <h3 className="text-h3 mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className={`${feature.textColor} text-body`}>{feature.description}</p>
                  </div>
                  
                  <div className="image-wrapper mt-8 md:mt-0">
                    <img 
                        src={feature.imageUrl} 
                        alt={feature.title}
                        loading="lazy"
                        className="w-full h-64 md:h-80 rounded-lg shadow-lg object-cover"
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+F