import Link from "next/link";

const zones = [
  {
    zone: "Eastlands Zone",
    desc: "Fastest response - 25 min avg",
    estates: ["Buruburu", "Donholm", "Umoja", "Kayole", "Komarock", "Embakasi", "Fedha", "Tassia"]
  },
  {
    zone: "Westlands Zone",
    desc: "Premium homes & apartments",
    estates: ["Kilimani", "Lavington", "Kileleshwa", "Westlands", "Parklands", "Loresho", "Kitsuru", "Kyuna"]
  },
  {
    zone: "South Nairobi Zone",
    desc: "Gated estates & maisonettes",
    estates: ["Langata", "South C", "South B", "Nairobi West", "Madaraka", "Ongata Rongai", "Kitengela", "Athi River"]
  },
  {
    zone: "North & Thika Road Zone",
    desc: "High-density apartments",
    estates: ["Kasarani", "Roysambu", "Kahawa West", "Zimmerman", "Githurai", "Ruiru", "Juja", "Thika"]
  },
  {
    zone: "Central & CBD Zone",
    desc: "Commercial + residential",
    estates: ["CBD", "Ngara", "Pangani", "Eastleigh", "Hurlingham", "Upper Hill", "Industrial Area", "Gigiri"]
  },
  {
    zone: "Karen & Langata Zone",
    desc: "Large homes, boreholes",
    estates: ["Karen", "Hardy", "Kitisuru", "Runda", "Muthaiga", "Spring Valley", "Rosslyn", "Garden Estate"]
  },
];

export default function EstatesPage() {
  return (
    <main className="bg-[#FCFBF8] min-h-screen">
      <nav className="bg-white border-b border-black/5 h-[72px] flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 flex justify-between items-center">
          <Link href="/"><img src="/rapidfundi-logo.png?v=2" alt="rapidfundi" className="h-9 w-auto" /></Link>
          <Link href="/" className="text-sm font-bold">← Back Home</Link>
        </div>
      </nav>

      {/* HERO like Hugo */}
      <section className="bg-[#0A1931] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20 relative z-10">
          <div className="text-[#FFC83D] text-[11px] font-black tracking-[0.2em] mb-3">LOCAL & TRUSTED</div>
          <h1 className="text-[36px] md:text-[48px] font-black leading-[0.9]">Areas We Serve</h1>
          <p className="mt-4 text-[16px] leading-7 text-[#CBD5E1] max-w-[640px]">
            rapidfundi provides residential and commercial plumbing services in Nairobi and surrounding communities including Buruburu, Kilimani, Lavington, Westlands, Langata, South C, Kasarani, Runda, Karen, Kitengela. Every job is quoted upfront and performed by NITA-verified plumbers, available 24/7 with photo proof.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#FFC83D]"></div>
      </section>

      {/* INTRO TEXT like Hugo */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-[15px] leading-7 text-[#475569]">
          rapidfundi proudly serves Nairobi — <span className="font-bold">89 Nairobi estates</span> — and surrounding communities of Kitengela, Athi River, Ruiru, Juja, Ongata Rongai. One of the key reasons residents choose us is our extensive local knowledge — we know Nairobi homes and the plumbing challenges that come with boreholes, city council water, and apartment blocks.
        </p>
        <p className="mt-4 text-[15px] leading-7 text-[#475569]">
          From drain cleaning and emergency plumbing to water heater installation, leak detection, and sewer line repairs, our fully licensed and NITA-verified team uses everything from hydro jetting to high-tech camera inspection to get the job done right.
        </p>

        <h2 className="mt-12 text-[22px] font-black text-[#0A1931]">Neighborhoods & Estates We Serve</h2>
        <p className="mt-2 text-[14px] text-[#64748B]">Explore our dedicated pages for the Nairobi-area communities we serve most:</p>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {zones.flatMap(z => z.estates).slice(0,12).map((estate) => (
            <Link key={estate} href={`/estates/${estate.toLowerCase().replace(/ /g,'-')}`} className="group bg-white border border-black/5 rounded-xl p-4 flex items-center justify-between hover:shadow-md hover:border-black/10 transition">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#0A1931] rounded-md flex items-center justify-center text-[#FFC83D] text-sm">📍</div>
                <span className="font-bold text-[13px] text-[#0A1931]">Plumber in {estate}</span>
              </div>
              <span className="text-[#FFC83D] group-hover:translate-x-1 transition">→</span>
            </Link>
          ))}
        </div>

        {/* Full zones */}
        <div className="mt-16 space-y-12">
          {zones.map((z) => (
            <div key={z.zone}>
              <h3 className="text-[18px] font-black text-[#0A1931]">{z.zone} <span className="text-[#64748B] font-normal text-[13px] ml-2">— {z.desc}</span></h3>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                {z.estates.map((e) => (
                  <Link key={e} href={`/estates/${e.toLowerCase().replace(/ /g,'-')}`} className="bg-[#F8FAFC] border border-black/5 rounded-lg px-4 py-2.5 text-[13px] font-medium hover:bg-white hover:shadow-sm transition">
                    {e}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
