"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const images = ["/1.png", "/2.png", "/3.png"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lang, setLang] = useState<"EN" | "HI">("EN");

  const translations = {
    EN: {
      description: "Tap & Tandoor is a modern neighborhood bistro serving seasonal comfort food, crafted cocktails, and thoughtfully selected wines. A warm and relaxed dining experience in the heart of the city, inspired by local ingredients and classic European flavors.",
      menu: "MENU",
      reservation: "RESERVATION",
      location: "LOCATION",
      wedToSun: "Wednesday to Sunday",
      tueToSun: "Tuesday to Sunday",
      jobs: "Jobs",
      contact: "Contact",
      instagram: "Instagram",
      fbCredits: "Facebook Credits",
      credits: "CREDITS"
    },
    HI: {
      description: "टैप एंड तंदूर एक आधुनिक नेबरहुड बिस्ट्रो है जो मौसमी आरामदायक भोजन, विशेष कॉकटेल और चुनिंदा वाइन परोसता है। स्थानीय सामग्रियों और क्लासिक यूरोपीय स्वादों से प्रेरित, शहर के केंद्र में एक गर्मजोशी भरा और आरामदायक भोजन का अनुभव।",
      menu: "मेनू",
      reservation: "आरक्षण",
      location: "स्थान",
      wedToSun: "बुधवार से रविवार",
      tueToSun: "मंगलवार से रविवार",
      jobs: "नौकरियाँ",
      contact: "संपर्क",
      instagram: "इंस्टाग्राम",
      fbCredits: "फेसबुक क्रेडिट",
      credits: "क्रेडिट"
    }
  };

  const t = translations[lang];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen lg:h-screen w-full lg:w-screen bg-[#faf9f6] text-[#1a1a1a] font-mono selection:bg-[#ff8e90] selection:text-white flex flex-col p-3 md:p-4 lg:p-6 overflow-y-auto lg:overflow-hidden">
      {/* Outer border/frame wrapper to mimic the design container */}
      <div className="flex-grow w-full mx-auto max-w-9xl rounded-lg overflow-hidden flex flex-col lg:grid lg:grid-cols-2 lg:h-full lg:min-h-0">
        
        {/* Mobile Logo (Visible only on mobile/tablet) */}
        <div className="lg:hidden p-4 pb-2 flex justify-center">
          <div className="relative w-full h-[70px] sm:h-[90px] cursor-pointer">
            <Image
              src="/LOGO.jpeg"
              alt="Tap & Tandoor Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* Left Side: Showcase Image Slideshow (Full-height on desktop, top-aligned on mobile) */}
        <div className="relative h-[460px] sm:h-[580px] lg:h-full overflow-hidden group min-h-0 w-full">
          {images.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={src}
                alt={`Tap & Tandoor Showcase ${index + 1}`}
                fill
                priority={index === 0}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-20 pointer-events-none" />
        </div>

        {/* Right Side: Content Panel */}
        <div className="flex flex-col justify-between p-4 sm:p-6 lg:p-8 xl:p-10 h-auto lg:h-full min-h-0 overflow-visible lg:overflow-y-auto">
          
          {/* Top Row: Utility & Language Selection */}
          <div className="flex justify-end items-center gap-3 text-[10px] sm:text-xs tracking-widest text-neutral-500 mb-2 lg:mb-0 -mt-10">
            <button 
              onClick={() => setLang("EN")} 
              className={`hover:text-black cursor-pointer transition-colors duration-200 ${lang === "EN" ? "font-bold text-black underline" : ""}`}
            >
              ENGLISH
            </button>
            <span>|</span>
            <button 
              onClick={() => setLang("HI")} 
              className={`hover:text-black cursor-pointer transition-colors duration-200 ${lang === "HI" ? "font-bold text-black underline" : ""}`}
            >
              हिन्दी
            </button>
          </div>

          {/* Desktop Logo (Visible only on desktop) */}
          <div className="hidden lg:block my-2 lg:my-1">
            <div className="relative w-full h-[90px] lg:h-[120px] cursor-pointer">
              <Image
                src="/LOGO.jpeg"
                alt="Tap & Tandoor Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* Description / Introduction Text */}
          <div className="my-3 lg:my-1.5 text-xs sm:text-sm xl:text-base leading-relaxed text-neutral-600 tracking-wide">
            <p>
              {t.description}
            </p>
          </div>

          {/* Navigation & Action Buttons */}
          <div className="flex flex-col w-full text-sm sm:text-base my-2 lg:my-0">
            <div className="h-[1px] bg-neutral-200 w-full" />
            
            <a 
              href="#menu" 
              className="py-3 lg:py-4 text-center text-base lg:text-lg font-bold tracking-[0.25em] hover:tracking-[0.35em] text-[#1a1a1a] hover:text-[#ED1B24] transition-all duration-300 ease-in-out block"
            >
              {t.menu}
            </a>
            
            <div className="h-[1px] bg-neutral-200 w-full" />
            
            <a 
              href="#reservation" 
              className="my-3 py-3 lg:py-4 text-center text-sm lg:text-base font-bold tracking-[0.3em] bg-black text-white hover:bg-[#ED1B24] rounded transition-all duration-300 ease-in-out shadow hover:shadow-md block hover:-translate-y-0.5 transform"
            >
              {t.reservation}
            </a>
            
            <div className="h-[1px] bg-neutral-200 w-full" />
          </div>

          {/* Info Sections: Location, Hours, & Footer links */}
          <div className="flex flex-col gap-4 text-xs xl:text-sm text-neutral-600 my-2 lg:my-0">
            {/* Address */}
            <div className="tracking-wide">
              <span className="font-semibold text-black block mb-0.5">{t.location}</span>
              128 Maple Street, Toronto (ON)
            </div>

            {/* Split Grid for Hours & Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {/* Column 1: Opening Hours */}
              <div className="space-y-2">
                <div>
                  <span className="text-[9px] text-neutral-400 block">{t.wedToSun}</span>
                  <span className="font-bold text-black text-xs xl:text-sm">12h - 15h30</span>
                </div>
                <div>
                  <span className="text-[9px] text-neutral-400 block">{t.tueToSun}</span>
                  <span className="font-bold text-black text-xs xl:text-sm">17h - 23h00</span>
                </div>
              </div>

              {/* Column 2: Quick Links */}
              <div className="flex flex-col space-y-1 text-xs xl:text-sm">
                <a href="#jobs" className="hover:text-black hover:underline transition-colors w-fit">{t.jobs}</a>
                <a href="#contact" className="hover:text-black hover:underline transition-colors w-fit">{t.contact}</a>
                <a href="#instagram" className="hover:text-black hover:underline transition-colors w-fit">{t.instagram}</a>
                <a href="#credits" className="hover:text-black hover:underline transition-colors w-fit font-semibold text-neutral-400">{t.fbCredits}</a>
              </div>
            </div>
          </div>

          {/* Footer Line & Credits */}
          <div className="flex justify-end text-[9px] tracking-widest text-neutral-400 mt-6 lg:mt-2">
            <a href="#credits" className="hover:text-black transition-colors">{t.credits}</a>
          </div>

        </div>

      </div>
    </div>
  );
}

