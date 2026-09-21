import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#FCFBF8] min-h-screen font-sans antialiased">
      {/* NAV - HUGO STYLE - CLEAN */}
      <header className="bg-white border-b border-black/5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-xl border border-black/5 shadow-sm flex items-center justify-center overflow-hidden p-1.5">
                <img src="/rapidflow-logo.png?v=2" alt="RapidFlow" className="w-full h-full object-contain mix-blend-multiply" />
              </div>
              <div className="leading-[0.9]">
                <div className="font-black text-[19px] tracking-[-0.02em] text-[#0A1931]">RAPIDFLOW</div>
                <div className="text-[10px] font-black tracking-[0.18em] text-[#0A66FF] mt-[2px]">PLUMBING • NAIROBI</div>
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-0">
            <a href="tel:0712345678" className="bg-[#FFC83D] text-[#0A1931] h-[44px] px-6 flex items-center gap-2 font-black text-[13px] tracking-wide hover:bg-[#FFB800] transition">
              <span>📞</span> (07) 1234-5678
            </a>
            <Link href="#download" className="bg-[#0F172A] text-white h-[44px] px-7 flex items-center gap-2 font-black text-[13px] tracking-wide hover:bg-black transition">
              <span>📱</span> Get the RapidFlow App
            </Link>
          </div>

          <Link href="#download" className="md:hidden bg-[#0F172A] text-white px-5 py-2.5 rounded-full text-[12px] font-bold">
            Get the App
          </Link>
        </div>

        <div className="hidden md:block border-t border-black/[0.04] bg-[#FCFBF8]/50">
          <div className="max-w-7xl mx-auto px-6 h-[44px] flex items-center justify-end">
            <div className="flex items-center gap-8 text-[13.5px] font-bold text-[#0A3D7A] tracking-[-0.01em]">
              <a href="#services" className="hover:text-[#0A66FF] transition">Services</a>
              <a href="#estates" className="hover:text-[#0A66FF] transition">Areas We Serve</a>
              <a href="#about" className="hover:text-[#0A66FF] transition">About Us</a>
              <a href="#" className="hover:text-[#0A66FF] transition">Plumbing Tips</a>
              <a href="#about" className="hover:text-[#0A66FF] transition">Our Mission</a>
            </div>
          </div>
        </div>
      </header>

      {/* HERO like Hugo */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white border border-black/5 shadow-sm px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> NITA VERIFIED • 4.9★ RATING
          </div>
          <h1 className="mt-6 text-[48px] md:text-[64px] leading-[0.9] font-black tracking-[-0.03em] text-[#0F172A]">
            Your local<br />trusted partner<br />for plumbing care
          </h1>
          <p className="mt-6 text-[18px] leading-7 text-[#475569] max-w-[480px]">
            RapidFlow has served Nairobi homeowners since 2024. Licensed, background-checked, and equipped to fix it right the first time with photo proof.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#download" className="bg-[#0F172A] text-white px-8 py-4 rounded-full font-bold text-[14px]">Schedule Now</Link>
            <Link href="tel:0712345678" className="bg-white border border-black/10 px-8 py-4 rounded-full font-bold text-[14px]">Call (07) 12 345 678</Link>
          </div>
          <div className="mt-8 flex items-center gap-4 text-[13px] text-[#64748B]">
            <div className="flex -space-x-2"><div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div><div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div><div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white"></div></div>
            <span>Trusted by 650+ Nairobi homes</span>
          </div>
        </div>

        <div className="relative md:ml-8">
          <div className="bg-white rounded-[32px] border border-black/[0.06] shadow-[0_24px_80px_rgba(15,23,42,0.12)] p-3">
            <div className="bg-[#F8FAFC] rounded-[24px] overflow-hidden h-[460px] relative flex flex-col">
              <div className="p-5 flex justify-between items-start">
                <div className="bg-white border border-black/10 shadow-sm rounded-full px-3.5 py-2 flex items-center gap-2 text-[11px] font-black tracking-wide">
                  <span className="w-5 h-5 bg-[#0F172A] rounded-full flex items-center justify-center text-[10px]">📍</span>
                  Buruburu • Kilimani • Lavington
                </div>
                <div className="bg-[#22C55E] text-white text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-[0_4px_12px_rgba(34,197,94,0.4)]">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span> LIVE
                </div>
              </div>

              <div className="flex-1 relative mx-3 mb-3 bg-white rounded-[18px] border border-black/5 overflow-hidden">
                <div className="absolute inset-0 opacity-60" style={{backgroundImage: `radial-gradient(#E2E8F0 1px, transparent 1px)`, backgroundSize: '18px 18px'}}></div>
                <div className="absolute top-[35%] left-[20%] right-[20%] h-[2px] bg-dashed border-t-2 border-dashed border-[#CBD5E1]"></div>
                <div className="absolute top-[30%] left-[18%] w-8 h-8 bg-[#0F172A] rounded-full flex items-center justify-center text-white shadow-lg">🏠</div>
                <div className="absolute top-[28%] right-[18%] w-10 h-10 bg-[#FFC83D] rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-[16px]">🛠️</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-[#0F172A] text-white text-[10px] font-bold px-3 py-1.5 rounded-full">ETA 18 mins • Plumber en route</div>
              </div>

              <div className="m-3 mt-0 bg-white rounded-[16px] border border-black/10 shadow-[0_12px_32px_rgba(0,0,0,0.08)] p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2.5">
                    <img src="https://i.pravatar.cc/40?img=12" className="w-8 h-8 rounded-full" alt="plumber" />
                    <div>
                      <div className="font-black text-[13px] leading-none text-[#0F172A]">Job #1023 - Drain Unclog</div>
                      <div className="text-[11px] text-[#64748B] mt-1">By James K. • NITA Licensed</div>
                    </div>
                  </div>
                  <div className="bg-[#ECFDF5] border border-green-200 text-[#15803D] text-[9px] font-black tracking-widest px-2.5 py-1 rounded-full">✓ VERIFIED</div>
                </div>
                <div className="mt-3.5 grid grid-cols-2 gap-2.5">
                  <div className="relative bg-[#F1F5F9] rounded-xl h-[76px] overflow-hidden border border-black/5">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-[16px]">🚿</span>
                      <span className="text-[10px] font-bold tracking-widest text-[#64748B] mt-1">BEFORE</span>
                    </div>
                    <div className="absolute top-1.5 left-1.5 bg-black/70 text-white text-[8px] font-bold px-1.5 py-0.5 rounded">09:42 AM</div>
                  </div>
                  <div className="relative bg-[#0F172A] rounded-xl h-[76px] overflow-hidden">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="w-6 h-6 bg-[#22C55E] rounded-full flex items-center justify-center text-white text-[12px]">✓</span>
                      <span className="text-[10px] font-black tracking-widest text-white mt-1.5">AFTER</span>
                    </div>
                    <div className="absolute top-1.5 right-1.5 bg-[#22C55E] text-white text-[8px] font-black px-1.5 py-0.5 rounded">DONE</div>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[10px] font-medium text-[#64748B]">
                    <span>✓ Photo proof</span><span>✓ Geotag</span><span>✓ M-Pesa</span>
                  </div>
                  <div className="text-[11px] font-black text-[#0F172A]">KES 3,500</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SMART TRUST BAR - NOW IN CORRECT PLACE */}
      <section className="bg-[#0A1931] text-white py-14 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#FFC83D]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between gap-8 items-start md:items-center">
            <div>
              <div className="text-[#FFC83D] text-[11px] font-black tracking-[0.2em]">WHY HOMEOWNERS TRUST US</div>
              <h3 className="mt-2 text-[24px] md:text-[28px] font-black leading-[1.1]">Upfront pricing. Licensed pros.<br/>No surprises.</h3>
            </div>
            <Link href="#download" className="bg-white text-[#0A1931] px-6 py-3 rounded-full text-[13px] font-black hover:bg-[#FFC83D] transition">Book Now →</Link>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-5"><div className="w-10 h-10 bg-[#FFC83D] rounded-xl flex items-center justify-center text-[#0A1931]">💰</div><div className="mt-4 font-bold text-[14px]">Upfront Pricing</div><div className="mt-1 text-[12px] text-[#94A3B8]">Quote in app before work.</div></div>
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-5"><div className="w-10 h-10 bg-[#FFC83D] rounded-xl flex items-center justify-center text-[#0A1931]">🛡️</div><div className="mt-4 font-bold text-[14px]">NITA Licensed</div><div className="mt-1 text-[12px] text-[#94A3B8]">Background-checked pros.</div></div>
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-5"><div className="w-10 h-10 bg-[#FFC83D] rounded-xl flex items-center justify-center text-[#0A1931]">⚡</div><div className="mt-4 font-bold text-[14px]">24/7 Emergency</div><div className="mt-1 text-[12px] text-[#94A3B8]">30-min avg response.</div></div>
            <div className="bg-white/[0.06] border border-white/10 rounded-2xl p-5"><div className="w-10 h-10 bg-[#FFC83D] rounded-xl flex items-center justify-center text-[#0A1931]">📸</div><div className="mt-4 font-bold text-[14px]">Photo Proof</div><div className="mt-1 text-[12px] text-[#94A3B8]">Before M-Pesa payment.</div></div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#FCFBF8] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <div className="inline-flex bg-[#0A1931] text-white px-3 py-1 rounded-full text-[10px] font-black tracking-[0.2em]">OUR SERVICES</div>
              <h2 className="mt-4 text-[36px] md:text-[48px] font-black leading-[0.9] text-[#0A1931]">Fixed Right.<br/>Priced Right.</h2>
            </div>
            <p className="text-[14px] text-[#64748B] max-w-[320px]">Upfront M-Pesa pricing in app. NITA licensed plumbers.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="group bg-white rounded-[24px] border border-black/[0.06] p-6 hover:-translate-y-1 transition-all"><div className="w-12 h-12 bg-[#FFF4CC] rounded-2xl flex items-center justify-center">🚿</div><h3 className="mt-5 font-black text-[18px] text-[#0A1931]">Drain Unclogging</h3><p className="mt-2 text-[13px] text-[#64748B]">Kitchen, bathroom, main line.</p><div className="mt-6 flex justify-between"><span className="font-black text-[13px]">KES 2,500 - 4,500</span><a href="#download" className="bg-[#0A1931] text-white px-4 py-2 rounded-full text-[11px] font-black">Book Now →</a></div></div>
            <div className="group bg-white rounded-[24px] border border-black/[0.06] p-6 hover:-translate-y-1 transition-all"><div className="w-12 h-12 bg-[#DBEAFE] rounded-2xl flex items-center justify-center">💧</div><h3 className="mt-5 font-black text-[18px] text-[#0A1931]">Leak Detection</h3><p className="mt-2 text-[13px] text-[#64748B]">Thermal + acoustic detection.</p><div className="mt-6 flex justify-between"><span className="font-black text-[13px]">KES 3,000 - 6,000</span><a href="#download" className="bg-[#0A1931] text-white px-4 py-2 rounded-full text-[11px] font-black">Book Now →</a></div></div>
            <div className="group bg-[#0A1931] rounded-[24px] p-6 relative overflow-hidden"><div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">🚨</div><div className="mt-5 inline-flex bg-[#FFC83D] text-[#0A1931] text-[9px] font-black px-2 py-1 rounded-full">MOST REQUESTED</div><h3 className="mt-3 font-black text-[18px] text-white">24/7 Emergency</h3><p className="mt-2 text-[13px] text-white/60">Burst pipe, flooded house. 30-min response.</p><div className="mt-6 flex justify-between"><span className="font-black text-white text-[13px]">KES 4,500+</span><a href="tel:0712345678" className="bg-white text-[#0A1931] px-4 py-2 rounded-full text-[11px] font-black">Call Now →</a></div></div>
            <div className="group bg-white rounded-[24px] border border-black/[0.06] p-6 hover:-translate-y-1 transition-all"><div className="w-12 h-12 bg-[#ECFDF5] rounded-2xl flex items-center justify-center">🚽</div><h3 className="mt-5 font-black text-[18px] text-[#0A1931]">Toilet Repair</h3><p className="mt-2 text-[13px] text-[#64748B]">Running, leaking, clogged.</p><div className="mt-6 flex justify-between"><span className="font-black text-[13px]">KES 2,000 - 5,500</span><a href="#download" className="bg-[#0A1931] text-white px-4 py-2 rounded-full text-[11px] font-black">Book Now →</a></div></div>
            <div className="group bg-white rounded-[24px] border border-black/[0.06] p-6 hover:-translate-y-1 transition-all"><div className="w-12 h-12 bg-[#F3E8FF] rounded-2xl flex items-center justify-center">🔧</div><h3 className="mt-5 font-black text-[18px] text-[#0A1931]">Heater & Pumps</h3><p className="mt-2 text-[13px] text-[#64748B]">Instant, tank, solar.</p><div className="mt-6 flex justify-between"><span className="font-black text-[13px]">KES 3,500 - 8,000</span><a href="#download" className="bg-[#0A1931] text-white px-4 py-2 rounded-full text-[11px] font-black">Book Now →</a></div></div>
            <div className="group bg-white rounded-[24px] border border-black/[0.06] p-6 hover:-translate-y-1 transition-all"><div className="w-12 h-12 bg-[#FFEDD5] rounded-2xl flex items-center justify-center">🏗️</div><h3 className="mt-5 font-black text-[18px] text-[#0A1931]">Pipe Installation</h3><p className="mt-2 text-[13px] text-[#64748B]">PPR & PVC. Council compliant.</p><div className="mt-6 flex justify-between"><span className="font-black text-[13px]">Custom Quote</span><a href="#download" className="bg-[#0A1931] text-white px-4 py-2 rounded-full text-[11px] font-black">Book Now →</a></div></div>
          </div>
        </div>
      </section>

      {/* ESTATES */}
      <section id="estates" className="bg-[#0A1931] text-white py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="md:w-[40%]">
              <div className="inline-flex bg-white/10 border border-white/10 text-[#FFC83D] px-3 py-1 rounded-full text-[10px] font-black tracking-[0.2em]">AREAS WE SERVE</div>
              <h2 className="mt-4 text-[36px] md:text-[52px] font-black leading-[0.9]">Nairobi<br/>Covered.</h2>
              <p className="mt-4 text-[14px] text-white/60 max-w-[320px]">Live plumbers tracked in-app. Average 18-min ETA.</p>
              <div className="mt-8 bg-white/[0.06] border border-white/10 rounded-[20px] p-4 flex items-center gap-4">
                <div className="w-10 h-10 bg-[#22C55E] rounded-full flex items-center justify-center animate-pulse">●</div>
                <div><div className="text-[13px] font-black">12 Plumbers Live Now</div><div className="text-[11px] text-white/50">Across 8 estates</div></div>
              </div>
            </div>
            <div className="md:w-[56%] grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'Buruburu & Eastlands', jobs: '642 jobs', eta: '12 min ETA' },
                { name: 'Kilimani & Kileleshwa', jobs: '518 jobs', eta: '15 min ETA' },
                { name: 'Lavington & Hurlingham', jobs: '489 jobs', eta: '16 min ETA' },
                { name: 'Westlands & Parklands', jobs: '412 jobs', eta: '14 min ETA' },
                { name: 'Syokimau & Athi River', jobs: '298 jobs', eta: '22 min ETA' },
                { name: 'Karen & Langata', jobs: '267 jobs', eta: '25 min ETA' },
              ].map((e) => (
                <div key={e.name} className="bg-white text-[#0A1931] rounded-[20px] p-5 hover:scale-[1.02] transition">
                  <div className="font-black text-[15px]">{e.name}</div>
                  <div className="mt-3 flex gap-2"><span className="bg-[#0A1931] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">{e.jobs}</span><span className="bg-[#F1F5F9] text-[10px] font-bold px-2.5 py-1 rounded-full">{e.eta}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT - REALISTIC */}
      <section id="about" className="bg-white py-20 px-6 border-t border-black/[0.04]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-12">
          <div>
            <div className="text-[11px] font-black tracking-[0.2em] text-[#0A66FF]">OUR MISSION</div>
            <h2 className="mt-3 text-[32px] md:text-[42px] font-black leading-[0.95] text-[#0A1931]">We started because fundis were unreliable.</h2>
            <p className="mt-6 text-[15px] leading-7 text-[#475569]">RapidFlow is 8 NITA-licensed plumbers based in Buruburu, not a call center. Every job has geotagged before/after photos so you know what you paid for.</p>
            <p className="mt-4 text-[15px] leading-7 text-[#475569]">No advance. You get quote in app before we start, you pay via M-Pesa after you approve photos.</p>
          </div>
          <div className="bg-[#F8FAFC] border border-black/5 rounded-[24px] p-3">
            <div className="bg-white rounded-[16px] border border-black/5 p-5">
              <div className="flex items-center gap-3">
                <img src="https://i.pravatar.cc/100?img=33" className="w-12 h-12 rounded-full" alt="founder" />
                <div><div className="font-black text-[14px]">James M. - Lead Plumber</div><div className="text-[11px] text-[#64748B]">8 years, 600+ homes in Eastlands</div></div>
              </div>
              <div className="mt-4 text-[13px] italic border-l-2 border-[#FFC83D] pl-4">"Most customers call us after a fundi disappeared with advance. We don't take advance. We fix, you check, you pay."</div>
            </div>
            <div className="mt-3 bg-[#0A1931] rounded-[16px] p-4 flex justify-between items-center text-white">
              <div className="text-[12px] font-bold">Need help now?</div>
              <a href="tel:0712345678" className="bg-[#FFC83D] text-[#0A1931] px-4 py-2 rounded-full text-[11px] font-black">Call 0712 345 678</a>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD + FOOTER - THIS WAS MISSING */}
      <section id="download" className="bg-[#FCFBF8] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white border border-black/[0.06] rounded-[28px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h2 className="text-[30px] md:text-[40px] font-black leading-[0.9] text-[#0A1931]">Book in 30 seconds.<br/>Track like Uber.</h2>
              <p className="mt-4 text-[14px] text-[#64748B] max-w-[380px]">Pick estate, issue, see price. Plumber comes with photo proof. Pay with M-Pesa.</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#" className="bg-[#0A1931] text-white px-6 py-3.5 rounded-full text-[13px] font-black text-center">⬇️ Download APK for Android</a>
                <div className="px-5 py-3.5 rounded-full border border-black/10 text-[11px] font-bold text-[#64748B] text-center">iOS coming Jan 2027</div>
              </div>
            </div>
            <div className="flex-1 w-full md:max-w-[360px]">
              <div className="bg-[#0A1931] rounded-[24px] p-4 text-white">
                <div className="bg-white rounded-[16px] p-4 text-[#0A1931]">
                  <div className="flex justify-between"><div className="text-[12px] font-black">Job #R-1842</div><div className="text-[9px] font-black bg-[#ECFDF5] text-[#15803D] px-2 py-1 rounded-full">LIVE</div></div>
                  <div className="mt-3 h-[90px] bg-[#F1F5F9] rounded-xl flex items-center justify-center text-[11px]">📍 Map: Plumber 4 min away - Buruburu</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0A1931] text-white py-14 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3"><img src="/rapidflow-logo.png?v=2" className="w-8 h-8 rounded-lg bg-white p-1" alt="logo" /><span className="font-black">RAPIDFLOW</span></div>
            <p className="mt-3 text-[12px] text-white/50 max-w-[240px]">8 licensed plumbers in Buruburu. No advance. Photo proof before M-Pesa.</p>
            <div className="mt-4 text-[11px] text-white/40">© 2026 RapidFlow Ltd.</div>
          </div>
          <div><div className="text-[11px] font-black text-white/40 tracking-widest">SERVICES</div><div className="mt-3 flex flex-col gap-2 text-[13px] text-white/70"><a href="#services">Drain Unclogging</a><a href="#services">Leak Detection</a><a href="#services">Emergency 24/7</a></div></div>
          <div><div className="text-[11px] font-black text-white/40 tracking-widest">ESTATES</div><div className="mt-3 flex flex-col gap-2 text-[13px] text-white/70"><span>Buruburu</span><span>Kilimani</span><span>Lavington</span><span>Westlands</span></div></div>
          <div><div className="text-[11px] font-black text-white/40 tracking-widest">CONTACT</div><div className="mt-3 text-[13px] text-white/70">Buruburu Phase 1<br/>Emergency 24/7<br/><a href="tel:0712345678" className="mt-3 inline-block bg-white text-[#0A1931] px-4 py-2 rounded-full text-[11px] font-black">0712 345 678</a></div></div>
        </div>
      </footer>
    </main>
  );
}