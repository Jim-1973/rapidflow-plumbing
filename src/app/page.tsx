import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#FCFBF8] min-h-screen font-sans antialiased">
      <div className="bg-[#FFC83D] text-[#0A1931] text-center py-2.5 px-6 text-[11px] font-black tracking-[0.1em]">
        BETA: Testing with 3 fundis in Nairobi CBD only. Full launch in 2 weeks.
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
                <div className="text-[10px] font-black tracking-[0.18em] text-[#0A66FF] mt-[2px]">PLUMBING • CBD BETA</div>
              </div>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-0">
            <a href="tel:0712345678" className="bg-[#FFC83D] text-[#0A1931] h-[44px] px-6 flex items-center gap-2 font-black text-[13px] tracking-wide">
              📞 0712 345 678
            </a>
            <Link href="#download" className="bg-[#0F172A] text-white h-[44px] px-7 flex items-center gap-2 font-black text-[13px] tracking-wide">
              Get the App
            </Link>
          </div>
        </div>
      </header>

      {/* HERO - REALISTIC */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white border border-black/10 shadow-sm px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wide">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span> CBD BETA • 3 FUNDIS TESTING
          </div>
          <h1 className="mt-6 text-[42px] md:text-[56px] leading-[0.95] font-black tracking-[-0.03em] text-[#0F172A]">
            Plumber needed<br/>in CBD? We are<br/>already in CBD.
          </h1>
          <p className="mt-6 text-[17px] leading-7 text-[#475569] max-w-[480px]">
            We're testing with 3 NITA fundis walking around CBD. No boda from Buruburu. Average response this week: 35 minutes. You'll get a price in the app before we start.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#download" className="bg-[#0F172A] text-white px-8 py-4 rounded-full font-bold text-[14px]">Book CBD Fundi</Link>
            <Link href="tel:0712345678" className="bg-white border border-black/10 px-8 py-4 rounded-full font-bold text-[14px]">Call: 0712 345 678</Link>
          </div>
          <div className="mt-6 text-[12px] text-[#64748B]">
            <span className="font-bold text-[#0A1931]">Currently serving:</span> Moi Ave, Kenyatta Ave, Kimathi, Tom Mboya, University Way, Haile Selassie (2km radius from Archives)
          </div>
        </div>

        <div className="relative md:ml-8">
          <div className="bg-white rounded-[32px] border border-black/[0.06] shadow-[0_24px_80px_rgba(15,23,42,0.12)] p-3">
            <div className="bg-[#F8FAFC] rounded-[24px] overflow-hidden h-[460px] relative flex flex-col">
              <div className="p-5 flex justify-between items-start">
                <div className="bg-white border border-black/10 shadow-sm rounded-full px-3.5 py-2 flex items-center gap-2 text-[11px] font-black">
                  📍 CBD Test Zone • Archives
                </div>
                <div className="bg-orange-500 text-white text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full">
                  BETA
                </div>
              </div>

              <div className="flex-1 relative mx-3 mb-3 bg-white rounded-[18px] border border-black/5 overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <div className="text-[12px] font-bold text-[#94A3B8]">LIVE MAP - BETA</div>
                  <div className="mt-2 text-[14px] font-black">James K. - 0.8km away</div>
                  <div className="mt-1 text-[11px] text-[#64748B]">Last job: Moi Ave - 1hr ago</div>
                  <div className="mt-4 bg-[#0A1931] text-white text-[11px] px-3 py-1.5 rounded-full inline-block">ETA ~25 mins walk</div>
                </div>
              </div>

              <div className="m-3 mt-0 bg-white rounded-[16px] border border-black/10 shadow-sm p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2.5">
                    <img src="https://i.pravatar.cc/40?img=12" className="w-8 h-8 rounded-full" alt="plumber" />
                    <div>
                      <div className="font-black text-[13px] leading-none text-[#0F172A]">CBD Test #7 - Sink Leak</div>
                      <div className="text-[11px] text-[#64748B] mt-1">Kimathi St - Yesterday</div>
                    </div>
                  </div>
                  <div className="bg-[#F1F5F9] border text-[#475569] text-[9px] font-black tracking-widest px-2.5 py-1 rounded-full">TEST JOB</div>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2.5">
                  <div className="bg-[#F1F5F9] rounded-xl h-[66px] flex flex-col items-center justify-center border">
                    <span className="text-[10px] font-bold text-[#64748B]">BEFORE PHOTO</span>
                    <span className="text-[9px] text-[#94A3B8]">09:42 AM</span>
                  </div>
                  <div className="bg-[#F1F5F9] rounded-xl h-[66px] flex flex-col items-center justify-center border">
                    <span className="text-[10px] font-bold text-[#0A1931]">AFTER + RECEIPT</span>
                    <span className="text-[9px] text-[#22C55E]">✓ Done</span>
                  </div>
                </div>
                <div className="mt-3 flex justify-between text-[11px]">
                  <span className="text-[#64748B]">Shop owner verified</span>
                  <span className="font-black">KES 2,500</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0A1931] text-white py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-[#FFC83D] text-[11px] font-black tracking-[0.2em]">HONEST BETA STATS</div>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div><div className="text-[28px] font-black">3</div><div className="text-[12px] text-white/60">Fundis in CBD this week</div></div>
            <div><div className="text-[28px] font-black">19</div><div className="text-[12px] text-white/60">Jobs done in CBD so far</div></div>
            <div><div className="text-[28px] font-black">35m</div><div className="text-[12px] text-white/60">Avg response time this week</div></div>
            <div><div className="text-[28px] font-black">0</div><div className="text-[12px] text-white/60">Advance payment asked</div></div>
          </div>
        </div>
      </section>

      <section id="cbd-zones" className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[28px] font-black text-[#0A1931]">Where we work right now</h2>
          <p className="mt-2 text-[14px] text-[#64748B] max-w-[500px]">We limited to 2km from Archives so our 3 fundis can walk. If you are outside this, join waitlist - we will expand to Upperhill and Westlands next.</p>

          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              { name: 'Moi Avenue', detail: 'From Kencom to Railway - 6 jobs done' },
              { name: 'Kenyatta Ave / Kimathi', detail: '4 jobs done - shops & offices' },
              { name: 'Tom Mboya / Accra Rd', detail: '5 jobs done this week' },
              { name: 'University Way', detail: '2 jobs - University buildings' },
              { name: 'Haile Selassie / Parliament', detail: '1 job - office leak' },
              { name: 'River Road Edge', detail: '1 job - testing only' },
            ].map((e) => (
              <div key={e.name} className="border border-black/10 rounded-[16px] p-4">
                <div className="font-bold text-[14px] text-[#0A1931]">{e.name}</div>
                <div className="text-[12px] text-[#64748B] mt-1">{e.detail}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[#FFF8DC] border border-[#FFC83D]/30 rounded-[16px] p-5 flex flex-col md:flex-row justify-between gap-4">
            <div>
              <div className="font-black text-[14px] text-[#0A1931]">Not in CBD? We don't serve you yet - honestly.</div>
              <div className="text-[13px] text-[#475569] mt-1">Buruburu, Kilimani, Westlands, Lavington waitlist open. We'll notify when we have fundis there.</div>
            </div>
            <a href="#" className="bg-[#0A1931] text-white px-5 py-2.5 rounded-full text-[12px] font-black whitespace-nowrap h-fit">Join Waitlist - No Spam</a>
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#F8FAFC] py-16 px-6 border-t border-black/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <div className="text-[11px] font-black tracking-[0.2em] text-[#0A66FF]">WHY CBD FIRST?</div>
            <h2 className="mt-3 text-[30px] font-black leading-[1] text-[#0A1931]">CBD shops lose money when closed for a leak.</h2>
            <p className="mt-4 text-[15px] leading-7 text-[#475569]">We are 3 plumbers who used to take matatus from Eastlands to CBD. Took 90 mins. Now we just stay in CBD from 8am-6pm and walk to jobs. It's faster and we save transport.</p>
            <p className="mt-3 text-[15px] leading-7 text-[#475569]">We don't take advance. We show you photo before and after. You pay M-Pesa after you are happy. That's it.</p>
          </div>
          <div className="bg-white border border-black/10 rounded-[20px] p-5">
            <div className="flex items-center gap-3">
              <img src="https://i.pravatar.cc/100?img=33" className="w-10 h-10 rounded-full" alt="founder" />
              <div><div className="font-black text-[13px]">James M. - Fundi #1</div><div className="text-[11px] text-[#64748B]">NITA Certified, 6 years, usually near Archives</div></div>
            </div>
            <div className="mt-4 text-[13px] italic border-l-2 border-[#FFC83D] pl-4 text-[#475569]">"We are testing. Sometimes we are late because CBD is crowded. We tell you honestly on call."</div>
            <div className="mt-4 text-[11px] text-[#94A3B8]">19 jobs completed • 4.6 avg rating (from 12 ratings) • Joined May 2026</div>
          </div>
        </div>
      </section>

      <section id="download" className="bg-[#FCFBF8] py-12 px-6">
        <div className="max-w-7xl mx-auto bg-white border border-black/10 rounded-[24px] p-8 flex flex-col md:flex-row justify-between gap-6 items-center">
          <div>
            <h2 className="text-[24px] font-black text-[#0A1931]">CBD Beta App - Android only</h2>
            <p className="mt-2 text-[13px] text-[#64748B]">Book, see price, track fundi walking to you. Photo proof before you pay.</p>
          </div>
          <a href="#" className="bg-[#0A1931] text-white px-6 py-3 rounded-full text-[13px] font-black">⬇️ Download APK (12MB)</a>
        </div>
      </section>

      <footer className="bg-[#0A1931] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto text-[11px] text-white/50">
          © 2026 rapidfundi - CBD Beta Test - 3 fundis • Archives, Nairobi • 0712 345 678
        </div>
      </footer>
    </main>
  );
}