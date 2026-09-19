export function MobileLayout({ children }) {
  return (
    <div className="flex justify-center min-h-screen items-center p-4">
      {/* Phone chassis: 375px or 390px (standard Figma mobile artboard) */}
      <div className="relative w-full max-w-[393px] h-[852px] bg-surface-page rounded-[44px] shadow-2xl overflow-hidden flex flex-col border border-neutral-800">
        
        {/* Full-width Status Bar (no 16px padding on the bar itself) */}
        <div className="w-full h-11 px-6 flex items-center bg-white justify-between text-xs font-semibold select-none shrink-0 text-neutral-900 dark:text-neutral-100">
          <span className="text-black">9:41</span>
          <div className="w-24 h-4 bg-black rounded-full mx-auto" /> {/* Notch/Island */}
          <div className="flex gap-1.5 items-center text-black ">
            <span>5G</span>
            <span>100%</span>
          </div>
        </div>

        {/* Content Area with exact 16px lateral gutters */}
        <main className="flex-1 overflow-y-auto pb-6 w-full">
          {children}
        </main>

      </div>
    </div>
  );
}