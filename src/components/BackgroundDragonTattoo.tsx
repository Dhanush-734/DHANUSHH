import React from 'react';

export const BackgroundDragonTattoo: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
    >
      {/* Upper Right Dragon Tattoo Watermark */}
      <div className="absolute -top-12 -right-20 sm:-top-8 sm:-right-8 md:top-8 md:-right-4 w-[420px] sm:w-[560px] md:w-[680px] lg:w-[760px] aspect-square transition-opacity duration-300">
        {/* Light Mode: Black ink tattoo with subtle low opacity */}
        <img
          src="/dragon-tattoo.png"
          alt=""
          className="w-full h-full object-contain opacity-[0.048] dark:hidden"
        />
        {/* Dark Mode: White/silver ink tattoo with subtle low opacity */}
        <img
          src="/dragon-tattoo-white.png"
          alt=""
          className="w-full h-full object-contain hidden dark:block dark:opacity-[0.055]"
        />
      </div>

      {/* Lower Left Dragon Tattoo Watermark (Mirrored & Rotated) */}
      <div className="absolute -bottom-20 -left-24 sm:-bottom-12 sm:-left-12 md:bottom-12 md:-left-6 w-[380px] sm:w-[520px] md:w-[640px] aspect-square transition-opacity duration-300 scale-x-[-1] rotate-12">
        {/* Light Mode: Black ink tattoo */}
        <img
          src="/dragon-tattoo.png"
          alt=""
          className="w-full h-full object-contain opacity-[0.038] dark:hidden"
        />
        {/* Dark Mode: White/silver ink tattoo */}
        <img
          src="/dragon-tattoo-white.png"
          alt=""
          className="w-full h-full object-contain hidden dark:block dark:opacity-[0.045]"
        />
      </div>
    </div>
  );
};
