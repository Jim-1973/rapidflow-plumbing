import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#FCFBF8] min-h-screen font-sans antialiased">
      {/* TOP BAR - PROFESSIONAL */}
      <div className="bg-[#0A1931] text-white text-center py-2.5 px-6 text-[11px] font-bold tracking-wide">
        <span className="inline-flex items-center gap-2">
          <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse"></span>
          NOW LIVE: Nairobi CBD • Other areas launching soon — <a href="#waitlist" className="text-[#FFC83D] underline underline-offset-4">Join Waitlist</a>
        </span>
      </div>

      <header className="bg-white border-b border-black/5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-xl border border-black/5 shadow-sm flex items-center justify-center overflow-hidden p-1.5">
                <img src="/rapidfundi-logo.png?v=2" alt="rapidfundi" className="w-full h-full object-contain mix-blend-multiply" />
              </div>
              <div className="leading-[0.9]">
                <div className="font-black text-[19px] tracking-[-0.02em] text-[#0A1931]">rapidfundi</div>
                <div className="text-[10px] font-black tracking-[0.18em] text-[#0A66FF] mt-[2px]">PLUMBING • NAIROBI CBD</div>
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-0">
            <a href="tel:0712345678" className="bg-[#FFC83D] text-[#0A1931] h-[44px] px-6 flex items-center gap-2 font-black text-[13px] tracking-wide hover:bg-[#FFB800] transition">
              📞 0712 345 678
            </a>
            <Link href="#download" className="bg-[#0F172A] text-white h-[44px] px-7 flex items-center gap-2 font-black text-[13px] tracking-wide hover:bg-black transition">
              📱 Get the App
            </Link>
          </div>
          <Link href="#download" className="md:hidden bg-[#0F172A] text-white px-5 py-2.5 rounded-full text-[12px] font-bold">Get the App</Link>
        </div>

        <div className="hidden md:block border-t border-black/[0.04] bg-[#FCFBF8]/50">
          <div className="max-w-7xl mx-auto px-6 h-[44px] flex items-center justify-end">
            <div className="flex items-center gap-8 text-[13.5px] font-bold text-[#0A3D7A] tracking-[-0.01em]">
              <a href="#services" className="hover:text-[#0A66FF] transition">Services</a>
              <a href="#cbd-zones" className="hover:text-[#0A66FF] transition">Coverage</a>
              <a href="#about" className="hover:text-[#0A66FF] transition">About</a>
              <a href="#waitlist" className="hover:text-[#0A66FF] transition">Waitlist</a>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white border border-black/5 shadow-sm px-3 py-1.5 rounded-full text-[11px] font-black tracking-wide">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> LIVE IN CBD • NITA VERIFIED
          </div>
          <h1 className="mt-6 text-[48px] md:text-[60px] leading-[0.9] font-black tracking-[-0.03em] text-[#0F172A]">
            Plumbing help<br/>in CBD, in<br/><span className="text-[#0A66FF]">30 minutes.</span>
          </h1>
          <p className="mt-6 text-[17px] leading-7 text-[#475569] max-w-[480px]">
            rapidfundi is now live in Nairobi CBD with NITA-licensed fundis stationed inside the CBD. No matatu delay — we walk to you. Upfront pricing, photo proof before you pay M-Pesa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#download" className="bg-[#0F172A] text-white px-8 py-4 rounded-full font-bold text-[14px]">Book CBD Fundi</Link>
            <Link href="tel:0712345678" className="bg-white border border-black/10 px-8 py-4 rounded-full font-bold text-[14px]">Call 0712 345 678</Link>
          </div>
          <div className="mt-6 flex items-center gap-2 text-[12px] text-[#64748B]">
            <div className="flex -space-x-2"><div className="w-7 h-7 rounded-full bg-gray-300 border-2 border-white"></div><div className="w-7 h-7 rounded-full bg-gray-400 border-2 border-white"></div></div>
            <span>Serving CBD offices & shops • <span className="font-bold text-[#0A1931]">Other estates launching soon</span></span>
          </div>
        </div>

        {/* MAP WITH ANIMATION - KEPT */}
        <div className="relative md:ml-8">
          <div className="bg-white rounded-[32px] border border-black/[0.06] shadow-[0_24px_80px_rgba(15,23,42,0.12)] p-3">
            <div className="bg-[#F8FAFC] rounded-[24px] overflow-hidden h-[460px] relative flex flex-col">
              <div className="p-5 flex justify-between items-start">
                <div className="bg-white border border-black/10 shadow-sm rounded-full px-3.5 py-2 flex items-center gap-2 text-[11px] font-black tracking-wide">
                  <span className="w-5 h-5 bg-[#0F172A] rounded-full flex items-center justify-center text-[10px]">📍</span>
                  Nairobi CBD • Kimathi St
                </div>
                <div className="bg-[#22C55E] text-white text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-[0_4px_12px_rgba(34,197,94,0.4)]">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span> LIVE
                </div>
              </div>

              <div className="flex-1 relative mx-3 mb-3 bg-white rounded-[18px] border border-black/5 overflow-hidden">
                <div className="absolute inset-0 opacity-50" style={{backgroundImage: `radial-gradient(#E2E8F0 1px, transparent 1px)`, backgroundSize: '18px 18px'}}></div>
                {/* Animated Route */}
                <div className="absolute top-[42%] left-[20%] right-[20%] h-[2px] border-t-2 border-dashed border-[#CBD5E1]"></div>
                <div className="absolute top-[38%] left-[18%] w-8 h-8 bg-[#0F172A] rounded-full flex items-center justify-center text-white shadow-lg">🏢</div>
                <div className="absolute top-[36%] right-[18%] w-10 h-10 bg-[#FFC83D] rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-[16px]">🛠️</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-[#0F172A] text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg">ETA 24 mins • Fundi en route</div>
              </div>

              <div className="m-3 mt-0 bg-white rounded-[16px] border border-black/10 shadow-[0_12px_32px_rgba(0,0,0,0.08)] p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2.5">
                    <img src="https://i.pravatar.cc/40?img=12" className="w-8 h-8 rounded-full" alt="plumber" />
                    <div>
                      <div className="font-black text-[13px] leading-none text-[#0F172A]">Job #CBD-124 • Office Leak</div>
                      <div className="text-[11px] text-[#64748B] mt-1">By James K. • NITA Licensed</div>
                    </div>
                  </div>
                  <div className="bg-[#ECFDF5] border border-green-200 text-[#15803D] text-[9px] font-black tracking-widest px-2.5 py-1 rounded-full">✓ VERIFIED</div>
                </div>
                <div className="mt-3.5 grid grid-cols-2 gap-2.5">
                  <div className="relative bg-[#F1F5F9] rounded-xl h-[76px] overflow-hidden border border-black/5">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-[16px]">🚿</span><span className="text-[10px] font-bold tracking-widest text-[#64748B] mt-1">BEFORE</span>
                    </div>
                    <div className="absolute top-1.5 left-1.5 bg-black/70 text-white text-[8px] font-bold px-1.5 py-0.5 rounded">09:42 AM</div>
                  </div>
                  <div className="relative bg-[#0F172A] rounded-xl h-[76px] overflow-hidden">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="w-6 h-6 bg-[#22C55E] rounded-full flex items-center justify-center text-white text-[12px]">✓</span><span className="text-[10px] font-black tracking-widest text-white mt-1.5">AFTER</span>
                    </div>
                    <div className="absolute top-1.5 right-1.5 bg-[#22C55E] text-white text-[8px] font-black px-1.5 py-0.5 rounded">DONE</div>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[10px] font-medium text-[#64748B]"><span>✓ Photo proof</span><span>✓ M-Pesa</span></div>
                  <div className="text-[11px] font-black text-[#0F172A]">KES 2,500</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0A1931] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 items-center">
          <div className="flex gap-10">
            <div><div className="text-[22px] font-black">3</div><div className="text-[11px] text-white/60">Fundis live in CBD</div></div>
            <div><div className="text-[22px] font-black">40+</div><div className="text-[11px] text-white/60">CBD jobs completed</div></div>
            <div><div className="text-[22px] font-black">28m</div><div className="text-[11px] text-white/60">Avg. CBD response</div></div>
            <div><div className="text-[22px] font-black">4.8★</div><div className="text-[11px] text-white/60">Rating (CBD clients)</div></div>
          </div>
          <div className="text-[12px] text-white/50">Currently operating 8am-7pm inside CBD grid</div>
        </div>
      </section>

      {/* COVERAGE */}
      <section id="cbd-zones" className="bg-[#0A1931] text-white py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="md:w-[40%]">
              <div className="inline-flex bg-white/10 border border-white/10 text-[#FFC83D] px-3 py-1 rounded-full text-[10px] font-black tracking-[0.2em]">CURRENT COVERAGE</div>
              <h2 className="mt-4 text-[36px] md:text-[48px] font-black leading-[0.9]">Live in CBD.<br/>Expanding soon.</h2>
              <p className="mt-4 text-[14px] text-white/60 max-w-[320px]">We started in CBD to guarantee fast response. Westlands, Upperhill, Kilimani and Eastlands are next on our rollout.</p>
            </div>
            <div className="md:w-[56%] grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Moi Avenue Corridor', status: 'LIVE', eta: '25 min' },
                { name: 'Kenyatta Ave & Kimathi St', status: 'LIVE', eta: '22 min' },
                { name: 'Tom Mboya & Accra Rd', status: 'LIVE', eta: '28 min' },
                { name: 'University Way & Uhuru Hwy', status: 'LIVE', eta: '30 min' },
                { name: 'Haile Selassie & Parliament', status: 'LIVE', eta: '32 min' },
                { name: 'River Road & Luthuli', status: 'LIVE', eta: '35 min' },
              ].map((e) => (
                <div key={e.name} className="bg-white text-[#0A1931] rounded-[20px] p-5 flex justify-between items-center">
                  <div>
                    <div className="font-black text-[14px]">{e.name}</div>
                    <div className="text-[11px] text-[#64748B] mt-1">Avg {e.eta} response</div>
                  </div>
                  <span className="bg-[#22C55E] text-white text-[10px] font-black px-2.5 py-1 rounded-full">{e.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div id="waitlist" className="mt-12 grid md:grid-cols-4 gap-3">
            {['Westlands - Coming Soon','Upperhill - Coming Soon','Kilimani - Coming Soon','Buruburu - Coming Soon'].map(t=>(
              <div key={t} className="bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-[12px] font-bold text-white/60 text-center">{t}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="download" className="bg-[#FCFBF8] py-16 px-6">
        <div className="max-w-7xl mx-auto bg-white border border-black/[0.06] rounded-[28px] p-8 md:p-10 flex flex-col md:flex-row justify-between gap-6 items-center">
          <div>
            <h2 className="text-[26px] font-black text-[#0A1931]">RapidFundi for CBD offices & shops</h2>
            <p className="mt-2 text-[13px] text-[#64748B] max-w-[420px]">Book in 30 seconds, track fundi en route, get photo proof before M-Pesa. Currently Nairobi CBD only.</p>
          </div>
          <div className="flex gap-3">
            <a href="#" className="bg-[#0A1931] text-white px-6 py-3 rounded-full text-[13px] font-black">Download Android App</a>
            <a href="#waitlist" className="bg-white border border-black/10 px-6 py-3 rounded-full text-[13px] font-bold">Join Waitlist</a>
          </div>
        </div>
      </section>

      <footer className="bg-[#0A1931] text-white py-10 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between text-[11px] text-white/50">
          <span>© 2026 rapidfundi Ltd. • Currently Live: Nairobi CBD</span>
          <span>0712 345 678 • Archives, CBD</span>
        </div>
      </footer>
    </main>
  );
}