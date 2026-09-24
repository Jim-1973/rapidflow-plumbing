import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#FCFBF8] min-h-screen font-sans antialiased">
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
                <img src="/rapidfundi.png?v=3" alt="rapidfundi" className="w-full h-full object-contain mix-blend-multiply" />
              </div>
              <div className="leading-[0.9]">
                <div className="font-black text-[19px] tracking-[-0.02em] text-[#0A1931]">RapidFundi</div>
                <div className="text-[10px] font-black tracking-[0.18em] text-[#0A66FF] mt-[2px]">PLUMBING • NAIROBI CBD</div>
              </div>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-0">
            <a href="tel:0722819877" className="bg-[#FFC83D] text-[#0A1931] h-[44px] px-6 flex items-center gap-2 font-black text-[13px] tracking-wide">📞 0712 345 678</a>
            <Link href="#download" className="bg-[#0F172A] text-white h-[44px] px-7 flex items-center gap-2 font-black text-[13px] tracking-wide">📱 Get the App</Link>
          </div>
          <Link href="#download" className="md:hidden bg-[#0F172A] text-white px-5 py-2.5 rounded-full text-[12px] font-bold">Get the App</Link>
        </div>
        <div className="hidden md:block border-t border-black/[0.04] bg-[#FCFBF8]/50">
          <div className="max-w-7xl mx-auto px-6 h-[44px] flex items-center justify-end">
            <div className="flex items-center gap-8 text-[13.5px] font-bold text-[#0A3D7A] tracking-[-0.01em]">
              <a href="services" className="hover:text-[#0A66FF] transition">Services</a>
              <a href="cbd-zones" className="hover:text-[#0A66FF] transition">Coverage</a>
              <a href="about" className="hover:text-[#0A66FF] transition">About</a>
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
          <h1 className="mt-6 text-[48px] md:text-[60px] leading-[0.9] font-black tracking-[-0.03em] text-[#0F172A]">Plumbing help<br/>in CBD, in<br/><span className="text-[#0A66FF]">30 minutes.</span></h1>
          <p className="mt-6 text-[17px] leading-7 text-[#475569] max-w-[480px]">RapidFundi is now live in Nairobi CBD with NITA-licensed fundis stationed inside the CBD. No matatu delay — we walk to you. Upfront pricing, photo proof before you pay M-Pesa.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#download" className="bg-[#0F172A] text-white px-8 py-4 rounded-full font-bold text-[14px]">Book CBD Fundi</Link>
            <Link href="tel:0722819877" className="bg-white border border-black/10 px-8 py-4 rounded-full font-bold text-[14px]">Call 0712 345 678</Link>
          </div>
        </div>

        <div className="relative md:ml-8">
          <div className="bg-white rounded-[32px] border border-black/[0.06] shadow-[0_24px_80px_rgba(15,23,42,0.12)] p-3">
            <div className="bg-[#F8FAFC] rounded-[24px] overflow-hidden h-[460px] relative flex flex-col">
              <div className="p-5 flex justify-between items-start">
                <div className="bg-white border border-black/10 shadow-sm rounded-full px-3.5 py-2 flex items-center gap-2 text-[11px] font-black tracking-wide"><span className="w-5 h-5 bg-[#0F172A] rounded-full flex items-center justify-center text-[10px]">📍</span>Nairobi CBD • Kimathi St</div>
                <div className="bg-[#22C55E] text-white text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-[0_4px_12px_rgba(34,197,94,0.4)]"><span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span> LIVE</div>
              </div>
              <div className="flex-1 relative mx-3 mb-3 bg-white rounded-[18px] border border-black/5 overflow-hidden">
                <div className="absolute inset-0 opacity-50" style={{backgroundImage: `radial-gradient(#E2E8F0 1px, transparent 1px)`, backgroundSize: '18px 18px'}}></div>
                <div className="absolute top-[42%] left-[20%] right-[20%] h-[2px] border-t-2 border-dashed border-[#CBD5E1]"></div>
                <div className="absolute top-[38%] left-[18%] w-8 h-8 bg-[#0F172A] rounded-full flex items-center justify-center text-white shadow-lg">🏢</div>
                <div className="absolute top-[36%] right-[18%] w-10 h-10 bg-[#FFC83D] rounded-full flex items-center justify-center shadow-lg animate-bounce"><span className="text-[16px]">🛠️</span></div>
                <div className="absolute bottom-4 left-4 bg-[#0F172A] text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg">ETA 24 mins • Fundi en route</div>
              </div>
              <div className="m-3 mt-0 bg-white rounded-[16px] border border-black/10 shadow-[0_12px_32px_rgba(0,0,0,0.08)] p-4">
                <div className="flex justify-between items-center"><div className="flex items-center gap-2.5"><img src="https://i.pravatar.cc/40?img=12" className="w-8 h-8 rounded-full" alt="plumber" /><div><div className="font-black text-[13px] leading-none text-[#0F172A]">Job #CBD-124 • Office Leak</div><div className="text-[11px] text-[#64748B] mt-1">By James K. • NITA Licensed</div></div></div><div className="bg-[#ECFDF5] border border-green-200 text-[#15803D] text-[9px] font-black tracking-widest px-2.5 py-1 rounded-full">✓ VERIFIED</div></div>
                <div className="mt-3.5 grid grid-cols-2 gap-2.5"><div className="relative bg-[#F1F5F9] rounded-xl h-[76px] overflow-hidden border border-black/5"><div className="absolute inset-0 flex flex-col items-center justify-center"><span className="text-[16px]">🚿</span><span className="text-[10px] font-bold tracking-widest text-[#64748B] mt-1">BEFORE</span></div></div><div className="relative bg-[#0F172A] rounded-xl h-[76px] overflow-hidden"><div className="absolute inset-0 flex flex-col items-center justify-center"><span className="w-6 h-6 bg-[#22C55E] rounded-full flex items-center justify-center text-white text-[12px]">✓</span><span className="text-[10px] font-black tracking-widest text-white mt-1.5">AFTER</span></div></div></div>
                <div className="mt-3 flex items-center justify-between"><div className="flex items-center gap-2 text-[10px] font-medium text-[#64748B]"><span>✓ Photo proof</span><span>✓ M-Pesa</span></div><div className="text-[11px] font-black text-[#0F172A]">KES 2,500</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0A1931] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 items-center">
          <div className="flex gap-10"><div><div className="text-[22px] font-black">3</div><div className="text-[11px] text-white/60">Fundis live in CBD</div></div><div><div className="text-[22px] font-black">40+</div><div className="text-[11px] text-white/60">CBD jobs completed</div></div><div><div className="text-[22px] font-black">28m</div><div className="text-[11px] text-white/60">Avg. CBD response</div></div><div><div className="text-[22px] font-black">4.8★</div><div className="text-[11px] text-white/60">Rating</div></div></div>
          <div className="text-[12px] text-white/50">Operating 8am-7pm inside CBD grid</div>
        </div>
      </section>

      {/* SERVICES - RESTORED */}
      <section id="services" className="bg-[#FCFBF8] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div><div className="inline-flex bg-[#0A1931] text-white px-3 py-1 rounded-full text-[10px] font-black tracking-[0.2em]">OUR SERVICES • CBD</div><h2 className="mt-4 text-[36px] md:text-[48px] font-black leading-[0.9] text-[#0A1931]">Fixed Right.<br/>Priced Right.</h2></div>
            <p className="text-[14px] text-[#64748B] max-w-[320px]">Upfront M-Pesa pricing in app. NITA licensed fundis for shops & offices.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="group bg-white rounded-[24px] border border-black/[0.06] p-6 hover:-translate-y-1 transition-all"><div className="w-12 h-12 bg-[#FFF4CC] rounded-2xl flex items-center justify-center">🚿</div><h3 className="mt-5 font-black text-[18px] text-[#0A1931]">Drain Unclogging</h3><p className="mt-2 text-[13px] text-[#64748B]">Sinks, toilets, kitchen lines in CBD shops.</p><div className="mt-6 flex justify-between items-center"><span className="font-black text-[13px]">KES 2,500 - 4,500</span><a href="#download" className="bg-[#0A1931] text-white px-4 py-2 rounded-full text-[11px] font-black">Book Now →</a></div></div>
            <div className="group bg-white rounded-[24px] border border-black/[0.06] p-6 hover:-translate-y-1 transition-all"><div className="w-12 h-12 bg-[#DBEAFE] rounded-2xl flex items-center justify-center">💧</div><h3 className="mt-5 font-black text-[18px] text-[#0A1931]">Leak Detection</h3><p className="mt-2 text-[13px] text-[#64748B]">Office bathrooms, rooftop tanks, hidden pipes.</p><div className="mt-6 flex justify-between items-center"><span className="font-black text-[13px]">KES 3,000 - 6,000</span><a href="#download" className="bg-[#0A1931] text-white px-4 py-2 rounded-full text-[11px] font-black">Book Now →</a></div></div>
            <div className="group bg-[#0A1931] rounded-[24px] p-6 relative overflow-hidden"><div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">🚨</div><div className="mt-5 inline-flex bg-[#FFC83D] text-[#0A1931] text-[9px] font-black px-2 py-1 rounded-full">MOST REQUESTED IN CBD</div><h3 className="mt-3 font-black text-[18px] text-white">24/7 Emergency</h3><p className="mt-2 text-[13px] text-white/60">Burst pipe, flooded shop. We walk to you.</p><div className="mt-6 flex justify-between items-center"><span className="font-black text-white text-[13px]">KES 4,500+</span><a href="tel:0722819877" className="bg-white text-[#0A1931] px-4 py-2 rounded-full text-[11px] font-black">Call Now →</a></div></div>
            <div className="group bg-white rounded-[24px] border border-black/[0.06] p-6 hover:-translate-y-1 transition-all"><div className="w-12 h-12 bg-[#ECFDF5] rounded-2xl flex items-center justify-center">🚽</div><h3 className="mt-5 font-black text-[18px] text-[#0A1931]">Toilet Repair</h3><p className="mt-2 text-[13px] text-[#64748B]">Running, leaking, clogged office toilets.</p><div className="mt-6 flex justify-between items-center"><span className="font-black text-[13px]">KES 2,000 - 5,500</span><a href="#download" className="bg-[#0A1931] text-white px-4 py-2 rounded-full text-[11px] font-black">Book Now →</a></div></div>
            <div className="group bg-white rounded-[24px] border border-black/[0.06] p-6 hover:-translate-y-1 transition-all"><div className="w-12 h-12 bg-[#F3E8FF] rounded-2xl flex items-center justify-center">🔧</div><h3 className="mt-5 font-black text-[18px] text-[#0A1931]">Heater & Pumps</h3><p className="mt-2 text-[13px] text-[#64748B]">Instant showers, booster pumps for buildings.</p><div className="mt-6 flex justify-between items-center"><span className="font-black text-[13px]">KES 3,500 - 8,000</span><a href="#download" className="bg-[#0A1931] text-white px-4 py-2 rounded-full text-[11px] font-black">Book Now →</a></div></div>
            <div className="group bg-white rounded-[24px] border border-black/[0.06] p-6 hover:-translate-y-1 transition-all"><div className="w-12 h-12 bg-[#FFEDD5] rounded-2xl flex items-center justify-center">🏗️</div><h3 className="mt-5 font-black text-[18px] text-[#0A1931]">Pipe Installation</h3><p className="mt-2 text-[13px] text-[#64748B]">PPR & PVC for CBD renovations, compliant.</p><div className="mt-6 flex justify-between items-center"><span className="font-black text-[13px]">Custom Quote</span><a href="#download" className="bg-[#0A1931] text-white px-4 py-2 rounded-full text-[11px] font-black">Book Now →</a></div></div>
          </div>
        </div>
      </section>

      <section id="cbd-zones" className="bg-[#0A1931] text-white py-20 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="md:w-[40%]"><div className="inline-flex bg-white/10 border border-white/10 text-[#FFC83D] px-3 py-1 rounded-full text-[10px] font-black tracking-[0.2em]">CURRENT COVERAGE</div><h2 className="mt-4 text-[36px] md:text-[48px] font-black leading-[0.9]">Live in CBD.<br/>Expanding soon.</h2><p className="mt-4 text-[14px] text-white/60 max-w-[320px]">We started in CBD to guarantee fast response. Westlands, Upperhill, Kilimani and Eastlands are next.</p></div>
            <div className="md:w-[56%] grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Moi Avenue Corridor', eta: '25 min' },
                { name: 'Kenyatta Ave & Kimathi St', eta: '22 min' },
                { name: 'Tom Mboya & Accra Rd', eta: '28 min' },
                { name: 'University Way & Uhuru Hwy', eta: '30 min' },
                { name: 'Haile Selassie & Parliament', eta: '32 min' },
                { name: 'River Road & Luthuli', eta: '35 min' },
              ].map((e) => (
                <div key={e.name} className="bg-white text-[#0A1931] rounded-[20px] p-5 flex justify-between items-center"><div><div className="font-black text-[14px]">{e.name}</div><div className="text-[11px] text-[#64748B] mt-1">Avg {e.eta} response</div></div><span className="bg-[#22C55E] text-white text-[10px] font-black px-2.5 py-1 rounded-full">LIVE</span></div>
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

      {/* ABOUT - PROFESSIONAL */}
<section id="about" className="bg-white py-24 px-6 border-t border-black/[0.04]">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-16 items-start">

      <div>
        <div className="inline-flex bg-[#0A1931] text-white px-3.5 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em]">ABOUT RAPIDFUNDI</div>
        <h2 className="mt-5 text-[36px] md:text-[46px] font-black leading-[0.92] tracking-[-0.02em] text-[#0A1931]">
          Professional plumbing for Nairobi's commercial core.
        </h2>

        <div className="mt-8 space-y-6">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-[#F8FAFC] border border-black/5 flex items-center justify-center flex-shrink-0">🛡️</div>
            <div>
              <div className="font-black text-[14px] text-[#0A1931]">NITA Licensed & Council Compliant</div>
              <div className="text-[13px] text-[#64748B] leading-6 mt-1">Every fundi is NITA-certified and vetted for work inside commercial buildings. We issue proper invoices and comply with Nairobi County by-laws for CBD operations.</div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-[#F8FAFC] border border-black/5 flex items-center justify-center flex-shrink-0">⚡</div>
            <div>
              <div className="font-black text-[14px] text-[#0A1931]">Built for 30-Minute Response</div>
              <div className="text-[13px] text-[#64748B] leading-6 mt-1">We station our team inside the CBD grid — not outside it. Our fundis walk to your shop or office on Moi, Kimathi, Tom Mboya and Kenyatta Ave. No matatu delays.</div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-[#F8FAFC] border border-black/5 flex items-center justify-center flex-shrink-0">📸</div>
            <div>
              <div className="font-black text-[14px] text-[#0A1931]">Upfront Pricing & Photo Proof</div>
              <div className="text-[13px] text-[#64748B] leading-6 mt-1">You receive a fixed quote in the app before work starts. We share before/after photos for verification. You approve, then pay via M-Pesa — no hidden fees.</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-[#0A1931] rounded-[28px] p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0A66FF]/20 rounded-full blur-[60px]"></div>
          <div className="relative">
            <h3 className="text-[22px] font-black leading-[1.1]">Why we started in CBD</h3>
            <p className="mt-4 text-[14px] leading-7 text-white/70">
              80% of plumbing emergencies in Nairobi CBD cause businesses to shut down for half a day waiting for a fundi coming from Eastlands or South B.
              <br/><br/>
              RapidFundi solves this by operating like an in-building maintenance team, but on-demand. We are based at Archives, available 8AM-7PM, and currently live in 6 CBD corridors. Other estates — Westlands, Upperhill, Kilimani — are launching soon.
            </p>
            <div className="mt-8 grid grid-cols-3 border-t border-white/10 pt-6">
              <div><div className="text-[24px] font-black">40+</div><div className="text-[11px] text-white/50 mt-1 uppercase tracking-wide">CBD jobs</div></div>
              <div><div className="text-[24px] font-black">28 min</div><div className="text-[11px] text-white/50 mt-1 uppercase tracking-wide">Avg response</div></div>
              <div><div className="text-[24px] font-black">4.8/5</div><div className="text-[11px] text-white/50 mt-1 uppercase tracking-wide">Client rating</div></div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-[#FCFBF8] border border-black/5 rounded-[20px] p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://i.pravatar.cc/100?img=33" className="w-11 h-11 rounded-full border border-black/5" alt="founder" />
            <div>
              <div className="font-black text-[13px] text-[#0A1931]">RapidFundi Operations</div>
              <div className="text-[11px] text-[#64748B]">Nairobi CBD • 0712 345 678</div>
            </div>
          </div>
          <a href="tel:0722819877" className="bg-[#FFC83D] text-[#0A1931] px-5 py-2.5 rounded-full text-[12px] font-black">Call Now</a>
        </div>
      </div>

    </div>
  </div>
</section>

      <section id="download" className="bg-[#FCFBF8] py-16 px-6">
        <div className="max-w-7xl mx-auto bg-white border border-black/[0.06] rounded-[28px] p-8 md:p-10 flex flex-col md:flex-row justify-between gap-6 items-center"><div><h2 className="text-[26px] font-black text-[#0A1931]">RapidFundi for CBD offices & shops</h2><p className="mt-2 text-[13px] text-[#64748B] max-w-[420px]">Book in 30 seconds, track fundi en route, get photo proof before M-Pesa. Currently Nairobi CBD only.</p></div><div className="flex gap-3"><a href="#" className="bg-[#0A1931] text-white px-6 py-3 rounded-full text-[13px] font-black">Download Android App</a><a href="#waitlist" className="bg-white border border-black/10 px-6 py-3 rounded-full text-[13px] font-bold">Join Waitlist</a></div></div>
      </section>

      <footer className="bg-[#0A1931] text-white py-10 px-6 border-t border-white/10"><div className="max-w-7xl mx-auto flex justify-between text-[11px] text-white/50"><span>© 2026 RapidFundi Ltd. • Currently Live: Nairobi CBD</span><span>0712 345 678 • Archives, CBD</span></div></footer>
    </main>
  );
}