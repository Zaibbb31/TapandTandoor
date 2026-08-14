import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-[#faf9f6] text-[#1a1a1a] font-mono selection:bg-[#ff8e90] selection:text-white flex flex-col p-3 md:p-4 lg:p-6 overflow-hidden">
      {/* Outer border/frame wrapper to mimic the design container */}
      <div className="flex-grow w-full mx-auto max-w-7xl bg-white border border-[#e5e5e0] shadow-sm rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 h-full min-h-0">
        
        {/* Left Side: Full-height Showcase Image */}
        <div className="relative h-[250px] lg:h-full overflow-hidden group min-h-0">
          <Image
            src="/catering_appetizers.jpg"
            alt="Tap & Tandoor Gourmet Catering Appetizers"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
        </div>

        {/* Right Side: Content Panel */}
        <div className="flex flex-col justify-between p-4 sm:p-6 lg:p-8 xl:p-10 h-full min-h-0 overflow-y-auto lg:overflow-hidden">
          
          {/* Top Row: Utility & Language Selection */}
          <div className="flex justify-end text-[10px] sm:text-xs tracking-widest text-neutral-500">
            <button className="hover:text-black hover:underline cursor-pointer transition-colors duration-200">
              LANGUAGE
            </button>
          </div>

          {/* Logo Section */}
          <div className="my-2 lg:my-1">
            <div className="bg-[#ff8e90] hover:bg-[#ff7a7c] transition-colors duration-300 py-4 lg:py-5 px-4 flex items-center justify-center rounded shadow-sm group cursor-pointer">
              <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-[0.2em] select-none text-center transition-transform duration-300 group-hover:scale-102">
                TAP & TANDOOR
              </h1>
            </div>
          </div>

          {/* Navigation & Action Buttons */}
          <div className="flex flex-col w-full text-sm sm:text-base">
            <div className="h-[1px] bg-neutral-200 w-full" />
            
            <a 
              href="#menu" 
              className="py-3 lg:py-4 text-center text-base lg:text-lg font-bold tracking-[0.25em] hover:tracking-[0.35em] text-[#1a1a1a] hover:text-[#ff8e90] transition-all duration-300 ease-in-out block"
            >
              MENU
            </a>
            
            <div className="h-[1px] bg-neutral-200 w-full" />
            
            <a 
              href="#reservation" 
              className="my-2 py-2.5 lg:py-3 text-center text-sm lg:text-base font-bold tracking-[0.3em] bg-black text-white hover:bg-[#ff8e90] rounded transition-all duration-300 ease-in-out shadow hover:shadow-md block hover:-translate-y-0.5 transform"
            >
              RESERVATION
            </a>
            
            <div className="h-[1px] bg-neutral-200 w-full" />
          </div>

          {/* Description / Introduction Text */}
          <div className="my-2 lg:my-1.5 text-xs lg:text-sm xl:text-base leading-relaxed text-neutral-600 tracking-wide">
            <p>
              Tap & Tandoor is a modern neighborhood bistro serving seasonal comfort food, 
              crafted cocktails, and thoughtfully selected wines. A warm and relaxed 
              dining experience in the heart of the city, inspired by local ingredients 
              and classic European flavors.
            </p>
          </div>

          <div className="h-[1px] bg-neutral-200 w-full mb-3 lg:mb-2" />

          {/* Info Sections: Location, Hours, & Footer links */}
          <div className="flex flex-col gap-3 text-xs xl:text-sm text-neutral-600">
            {/* Address */}
            <div className="tracking-wide">
              <span className="font-semibold text-black block mb-0.5">LOCATION</span>
              128 Maple Street, Toronto (ON)
            </div>

            {/* Split Grid for Hours & Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {/* Column 1: Opening Hours */}
              <div className="space-y-1.5">
                <div>
                  <span className="text-[9px] text-neutral-400 block">Wednesday to Sunday</span>
                  <span className="font-bold text-black text-xs xl:text-sm">12h - 15h30</span>
                </div>
                <div>
                  <span className="text-[9px] text-neutral-400 block">Tuesday to Sunday</span>
                  <span className="font-bold text-black text-xs xl:text-sm">17h - 23h00</span>
                </div>
              </div>

              {/* Column 2: Quick Links */}
              <div className="flex flex-col space-y-1 text-xs xl:text-sm">
                <a href="#jobs" className="hover:text-black hover:underline transition-colors w-fit">Jobs</a>
                <a href="#contact" className="hover:text-black hover:underline transition-colors w-fit">Contact</a>
                <a href="#instagram" className="hover:text-black hover:underline transition-colors w-fit">Instagram</a>
                <a href="#credits" className="hover:text-black hover:underline transition-colors w-fit font-semibold text-neutral-400">Facebook Credits</a>
              </div>
            </div>
          </div>

          {/* Footer Line & Credits */}
          <div className="flex justify-end text-[9px] tracking-widest text-neutral-400 mt-4 lg:mt-2">
            <a href="#credits" className="hover:text-black transition-colors">CREDITS</a>
          </div>

        </div>

      </div>
    </div>
  );
}

