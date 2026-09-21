const data: any = {
  "emergency-plumbing": {
    title: "Emergency Plumbing in Nairobi",
    subtitle: "Burst pipe, major leak, or sewage backup? We respond in 30 mins.",
    desc: "RapidFlow emergency plumbers are NITA-verified and estate-based. We stop damage fast and show proof of work with geotagged photos.",
    includes: ["Burst pipe repair", "Major leak stoppage", "Sewage backup clearing", "Water shut-off valve replacement", "Geotagged before/after photo proof", "30-min estate response"],
    why: "Estate-based verified plumbers, not random fundis. You get photo proof, geotag, and M-Pesa receipt for every job.",
    price: "From KSh 2,500 call-out + job"
  },
  "drain-cleaning": {
    title: "Drain Cleaning & Clog Removal",
    subtitle: "Clear slow and clogged drains the right way - kitchen, bath, main lines.",
    desc: "Hydro jetting and camera inspection for estate homes. No guessing, we show you the blockage.",
    includes: ["Kitchen sink unclogging", "Bathroom drain clearing", "Main line hydro jetting", "Camera inspection", "Odor & bacteria removal", "Preventive maintenance tips"],
    why: "We use modern tools and show before/after video proof for you and your landlord.",
    price: "From KSh 1,500 per drain"
  },
  "water-heater": {
    title: "Water Heater Repair & Installation",
    subtitle: "Repair, replacement, and new installation for tank and tankless systems.",
    desc: "Gas and electric water heaters for Nairobi apartments and homes. Safe, certified handling.",
    includes: ["Instant heater repair", "Tank heater install", "Thermostat replacement", "Heating element fix", "Safety valve & pressure check", "Warranty on parts"],
    why: "NITA certified technicians, safe gas handling, and warranty on work.",
    price: "From KSh 3,000 repair / 18,000 install"
  },
  "leak-detection": {
    title: "Water Leak Detection Services",
    subtitle: "Find hidden leaks behind walls, under slabs, and underground.",
    desc: "Stop high water bills before they damage your home. Acoustic and thermal detection without breaking walls.",
    includes: ["Wall leak detection", "Slab leak detection", "Underground leak tracing", "Water bill analysis", "Pinpoint repair + proof", "Moisture report"],
    why: "Hidden leaks cost Nairobi homes KSh 10k+ monthly. We find them accurately.",
    price: "From KSh 2,000 detection"
  },
  "sewer-line": {
    title: "Sewer Line Repair & Replacement",
    subtitle: "Diagnose and repair root intrusion, breaks, and backups with trenchless tech.",
    desc: "For estates with mature trees causing root intrusion and old sewer lines.",
    includes: ["Root intrusion removal", "Sewer backup clearing", "Pipe relining (no dig)", "Trenchless repair", "Estate council compliance", "CCTV report"],
    why: "Estate-managed sewer systems need professional care without open digging that blocks roads.",
    price: "From KSh 5,000 assessment"
  },
  "tank-repiping": {
    title: "Tank Cleaning & Whole-Home Repiping",
    subtitle: "Replace aging, corroded pipes with modern PPR & PEX materials.",
    desc: "For clean water and zero leaks. Plus professional black water tank cleaning for estates.",
    includes: ["Water tank scrubbing & disinfection", "Pipe replacement (PPR, PEX)", "Corroded pipe removal", "Water quality test", "Estate approval handling", "5-year warranty"],
    why: "Old estates have 30-year-old galvanized pipes that cause brown water and leaks. We modernize them.",
    price: "From KSh 15,000 tank / 45,000 repipe"
  }
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }){
  const { slug } = await params;
  const s = data[slug];
  if(!s) return <div className="p-20 max-w-[900px] mx-auto"><h1 className="font-black text-2xl">Service not found: {slug}</h1><a href="/#services" className="underline mt-4 block">← Back</a></div>;
  return(
    <main className="bg-white min-h-screen">
      <div className="bg-[#0F172A] text-white px-6 py-16">
        <div className="max-w-[900px] mx-auto">
          <a href="/#services" className="text-xs font-bold tracking-widest opacity-60 hover:opacity-100">← BACK TO SERVICES</a>
          <h1 className="text-[40px] md:text-[48px] font-black leading-[0.9] mt-6 tracking-tight">{s.title}</h1>
          <p className="text-[18px] text-white/70 mt-4 max-w-[600px] leading-relaxed">{s.subtitle}</p>
          <div className="mt-6 inline-flex bg-white/10 border border-white/10 px-4 py-2 rounded-full text-xs font-bold">{s.price}</div>
        </div>
      </div>
      <div className="max-w-[900px] mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <p className="text-[#334155] leading-relaxed text-[16px]">{s.desc}</p>
          <h3 className="font-black text-xl mt-10 tracking-tight">What's included</h3>
          <ul className="mt-4 space-y-3">
            {s.includes.map((i:string)=>(
              <li key={i} className="flex gap-3 items-start">
                <span className="w-6 h-6 bg-[#ECFDF5] rounded-full flex items-center justify-center text-[#0A7E6B] text-xs flex-shrink-0 mt-0.5">✓</span>
                <span className="text-[14px] font-semibold text-[#0F172A]">{i}</span>
              </li>
            ))}
          </ul>
          <div className="bg-[#F8FAFC] border border-black/5 rounded-[20px] p-6 mt-10">
            <h4 className="font-black text-[15px]">Why RapidFlow?</h4>
            <p className="text-[14px] text-[#64748B] mt-2 leading-relaxed">{s.why}</p>
          </div>
        </div>
        <div className="bg-[#0A7E6B] rounded-[20px] p-6 text-white h-fit sticky top-24">
          <div className="font-black text-[16px]">Need this service now?</div>
          <p className="text-[13px] text-white/80 mt-2 leading-relaxed">Get a NITA-verified plumber in your estate in 30 mins. Photo proof, M-Pesa payment.</p>
          <button className="bg-white text-black w-full mt-6 py-3.5 rounded-full font-black text-[13px]">Download App to Book</button>
          <div className="text-[11px] mt-4 opacity-70 text-center font-bold tracking-widest">70+ ESTATES • NITA VERIFIED • 4.9 RATING</div>
        </div>
      </div>
    </main>
  )
}