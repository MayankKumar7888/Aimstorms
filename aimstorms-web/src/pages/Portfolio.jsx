export default function Portfolio() {
    const projects = [
        {
            id: "01",
            title: "Cockcolours",
            category: "F&B",
            service: "Brand & Packaging",
            year: "2024",
            image: "https://aimstorms.com/aim-data/work/cock.png",
            link: "https://cockcolours.com",
        },
        {
            id: "02",
            title: "Amaribath",
            category: "Wellness",
            service: "Identity & Web",
            year: "2024",
            image: "https://aimstorms.com/aim-data/work/amaribath.png",
            link: "https://amaribath.com",
        },
        {
            id: "03",
            title: "Disedge School",
            category: "Education",
            service: "Brand System",
            year: "2023",
            image: "https://aimstorms.com/aim-data/work/disedge.png",
            link: "https://disedge.ac.in",
        },
        {
            id: "04",
            title: "Airtree",
            category: "HVAC",
            service: "Web & Campaign",
            year: "2024",
            image: "https://aimstorms.com/aim-data/work/airtree.png",
            link: "https://airtreehvac.com",
        },
        {
            id: "05",
            title: "Brijudyog",
            category: "Industrial",
            service: "Corporate Identity",
            year: "2023",
            image: "https://aimstorms.com/aim-data/work/brij.png",
            link: "https://brijudyogvihar.com",
        },
        {
            id: "06",
            title: "Gautami Wellness",
            category: "Wellness",
            service: "Brand & Packaging",
            year: "2024",
            image: "https://aimstorms.com/aim-data/work/gautami.png",
            link: "https://gautamiwellness.com",
        },
        {
            id: "07",
            title: "GFM Foods",
            category: "F&B",
            service: "Packaging Suite",
            year: "2024",
            image: "https://aimstorms.com/aim-data/work/gfm.png",
            link: "https://gfmfoods.in",
        },
        {
            id: "08",
            title: "Urban Tots",
            category: "Retail",
            service: "E-commerce",
            year: "2023",
            image: "https://aimstorms.com/aim-data/work/urbaan.png",
            link: "https://urbantots.in",
        },
        {
            id: "09",
            title: "GSM Doors",
            category: "Building",
            service: "Brand & Web",
            year: "2023",
            image: "https://aimstorms.com/aim-data/work/gsm.png",
            link: "https://gsmdoor.com",
        },
    ];

    const filters = [
        "All",
        "Brand",
        "Packaging",
        "Web",
        "E-commerce",
        "Campaign",
    ];

    return (
        <div>
            <section class="border-bottom border-dark mx-md-5 mx-3 py-5">
                <div class="col-12 d-flex justify-content-between portfolio-section-subHeading flex-wrap">
                    <span>Selected Work · 2023–2024</span><span>12 Projects</span>
                </div>
                <h1 class="col-12 portfolio-section-heading mt-3 mt-md-4">The <span class="fst-italic">portfolio</span>
                    <span class="text-orange orange-dot">.</span>
                </h1>
                <div class="col-12 portfolio-section-para d-flex justify-content-start justify-content-md-end mt-4">
                    <p class="col-12 col-md-7 col-lg-5">A working archive of brands we've shaped — identity systems, packaging suites, websites and campaigns built to outshine in their category.</p>
                </div>
                <div className="d-flex flex-wrap gap-2 mt-4">
                    {filters.map((item, index) => (
                        <button key={item} className={`filter-btn ${index === 0 ? "active" : "" }`}>{item}</button>
                    ))}
                </div>
            </section>
        
            <section className="mx-md-5 mx-3 py-5">
                <div className="row g-4">
                    {projects.map((item) => (
                        <div className="col-md-6 col-lg-4" key={item.id}>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="portfolio-section-card" >
                                <img src={item.image} alt={item.title} className="portfolio-section-img" />
                                <div className="portfolio-section-meta">
                                    <span>{item.id} / {item.category}</span>
                                    <span>{item.year}</span>
                                </div>
                                <div className="portfolio-section-overlay">
                                    <div className="portfolio-section-content">
                                        <p className="portfolio-section-service">{item.service}</p>
                                        <div className="d-flex justify-content-between align-items-end">
                                            <h3 className="portfolio-section-title">{item.title}</h3>
                                            <span className="portfolio-section-arrow"><i className="bi bi-arrow-up-right"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            <section id="built" class="px-md-5 px-3 py-5">
                <div class="row mb-0 mb-md-5">
                    <div class="col-12 col-md-6">
                        <div class="built-subHeading">— Aimstorms Studio</div>
                        <h2 class="built-heading mt-3 mt-md-0">Branding,<br /><span class="fst-italic fw-light">design & digital</span><span class="text-orange orange-dot">.</span></h2>
                    </div>
                    <div class="col-12 col-md-6 d-flex flex-column justify-content-end">
                        <p class="built-para mt-4 mt-md-5 pb-3">Got a project in mind? Send the brief — we'll come back within 24 hours with a clear sense of fit and the next step.</p>
                        <a href="/contact" class="btn py-2 py-md-3 px-2 px-md-4 built-btn align-self-start">Start a project →</a>
                    </div>
                </div>
            </section>
        </div>
    );
}










// <div class="min-h-screen bg-background text-foreground grain">

    
// <section class="border-b border-ink px-6 pt-14 pb-10 md:px-10 md:pt-20 md:pb-14">
//     <div class="mb-8 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-muted-foreground">
//         <span>— Selected Work · 2023–2024</span><span>12<!-- --> Projects</span>
//     </div>
//         <h1 class="font-display text-[14vw] leading-[0.85] tracking-[-0.05em] md:text-[10vw]">The <span class="italic font-light">portfolio</span>
//         <span class="text-electric">.</span>
//     </h1>
//     <div class="mt-10 grid gap-10 md:grid-cols-12">
//         <p class="md:col-span-5 md:col-start-7 text-lg leading-relaxed text-muted-foreground">A working archive of brands we've shaped — identity systems, packaging suites, websites and campaigns built to outshine in their category.</p>
//     </div>
//     <div class="mt-12 flex flex-wrap gap-2">
//         <button class="border border-ink px-4 py-2 font-mono text-[11px] uppercase tracking-widest transition bg-ink text-cream">All</button>
//         <button class="border border-ink px-4 py-2 font-mono text-[11px] uppercase tracking-widest transition hover:bg-ink hover:text-cream">Brand</button>
//         <button class="border border-ink px-4 py-2 font-mono text-[11px] uppercase tracking-widest transition hover:bg-ink hover:text-cream">Packaging</button>
//         <button class="border border-ink px-4 py-2 font-mono text-[11px] uppercase tracking-widest transition hover:bg-ink hover:text-cream">Web</button><button class="border border-ink px-4 py-2 font-mono text-[11px] uppercase tracking-widest transition hover:bg-ink hover:text-cream">E-commerce</button>
//         <button class="border border-ink px-4 py-2 font-mono text-[11px] uppercase tracking-widest transition hover:bg-ink hover:text-cream">Campaign</button>
//     </div>
// </section>


// <section class="border-b border-ink px-6 py-10 md:px-10 md:py-16">
// <div class="grid auto-rows-[260px] grid-cols-1 gap-px bg-ink md:grid-cols-2 lg:grid-cols-4">
// <a href="https://cockcolours.com/" target="_blank" rel="noreferrer" class="group relative overflow-hidden bg-cream lg:col-span-2 lg:row-span-2">
// <img src="https://aimstorms.com/aim-data/work/cock.png" alt="Cockcolours" loading="lazy" class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105">
// <div class="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/70">
// </div><div class="absolute top-0 left-0 right-0 flex items-center justify-between p-4 font-mono text-[10px] uppercase tracking-widest text-cream mix-blend-difference">
// <span>01<!-- --> / <!-- -->F&amp;B</span><span>2024</span></div>
// <div class="absolute bottom-0 left-0 right-0 translate-y-2 p-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100"><div class="font-mono text-[10px] uppercase tracking-widest text-electric">Brand &amp; Packaging</div><div class="mt-1 flex items-end justify-between gap-3"><h3 class="font-display text-3xl leading-none text-cream md:text-4xl">Cockcolours</h3><span class="font-mono text-xs text-cream">↗</span></div></div></a><a href="https://amaribath.com/" target="_blank" rel="noreferrer" class="group relative overflow-hidden bg-cream lg:col-span-2"><img src="https://aimstorms.com/aim-data/work/amaribath.png" alt="Amaribath" loading="lazy" class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"><div class="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/70"></div><div class="absolute top-0 left-0 right-0 flex items-center justify-between p-4 font-mono text-[10px] uppercase tracking-widest text-cream mix-blend-difference"><span>02<!-- --> / <!-- -->Wellness</span><span>2024</span></div><div class="absolute bottom-0 left-0 right-0 translate-y-2 p-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100"><div class="font-mono text-[10px] uppercase tracking-widest text-electric">Identity &amp; Web</div><div class="mt-1 flex items-end justify-between gap-3"><h3 class="font-display text-3xl leading-none text-cream md:text-4xl">Amaribath</h3><span class="font-mono text-xs text-cream">↗</span></div></div></a><a href="https://disedge.ac.in/" target="_blank" rel="noreferrer" class="group relative overflow-hidden bg-cream "><img src="https://aimstorms.com/aim-data/work/disedge.png" alt="Disedge School" loading="lazy" class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"><div class="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/70"></div><div class="absolute top-0 left-0 right-0 flex items-center justify-between p-4 font-mono text-[10px] uppercase tracking-widest text-cream mix-blend-difference"><span>03<!-- --> / <!-- -->Education</span><span>2023</span></div><div class="absolute bottom-0 left-0 right-0 translate-y-2 p-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100"><div class="font-mono text-[10px] uppercase tracking-widest text-electric">Brand System</div><div class="mt-1 flex items-end justify-between gap-3"><h3 class="font-display text-3xl leading-none text-cream md:text-4xl">Disedge School</h3><span class="font-mono text-xs text-cream">↗</span></div></div></a><a href="https://www.airtreehvac.com/" target="_blank" rel="noreferrer" class="group relative overflow-hidden bg-cream "><img src="https://aimstorms.com/aim-data/work/airtree.png" alt="Airtree" loading="lazy" class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"><div class="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/70"></div><div class="absolute top-0 left-0 right-0 flex items-center justify-between p-4 font-mono text-[10px] uppercase tracking-widest text-cream mix-blend-difference"><span>04<!-- --> / <!-- -->HVAC</span><span>2024</span></div><div class="absolute bottom-0 left-0 right-0 translate-y-2 p-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100"><div class="font-mono text-[10px] uppercase tracking-widest text-electric">Web &amp; Campaign</div><div class="mt-1 flex items-end justify-between gap-3"><h3 class="font-display text-3xl leading-none text-cream md:text-4xl">Airtree</h3><span class="font-mono text-xs text-cream">↗</span></div></div></a><a href="https://brijudyogvihar.com/" target="_blank" rel="noreferrer" class="group relative overflow-hidden bg-cream lg:col-span-2"><img src="https://aimstorms.com/aim-data/work/brij.png" alt="Brijudyog" loading="lazy" class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"><div class="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/70"></div><div class="absolute top-0 left-0 right-0 flex items-center justify-between p-4 font-mono text-[10px] uppercase tracking-widest text-cream mix-blend-difference"><span>05<!-- --> / <!-- -->Industrial</span><span>2023</span></div><div class="absolute bottom-0 left-0 right-0 translate-y-2 p-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100"><div class="font-mono text-[10px] uppercase tracking-widest text-electric">Corporate Identity</div><div class="mt-1 flex items-end justify-between gap-3"><h3 class="font-display text-3xl leading-none text-cream md:text-4xl">Brijudyog</h3><span class="font-mono text-xs text-cream">↗</span></div></div></a><a href="https://gautamiwellness.com/" target="_blank" rel="noreferrer" class="group relative overflow-hidden bg-cream lg:row-span-2"><img src="https://aimstorms.com/aim-data/work/gautami.png" alt="Gautami Wellness" loading="lazy" class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"><div class="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/70"></div><div class="absolute top-0 left-0 right-0 flex items-center justify-between p-4 font-mono text-[10px] uppercase tracking-widest text-cream mix-blend-difference"><span>06<!-- --> / <!-- -->Wellness</span><span>2024</span></div><div class="absolute bottom-0 left-0 right-0 translate-y-2 p-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100"><div class="font-mono text-[10px] uppercase tracking-widest text-electric">Brand &amp; Packaging</div><div class="mt-1 flex items-end justify-between gap-3"><h3 class="font-display text-3xl leading-none text-cream md:text-4xl">Gautami Wellness</h3><span class="font-mono text-xs text-cream">↗</span></div></div></a><a href="https://gfmfoods.in/" target="_blank" rel="noreferrer" class="group relative overflow-hidden bg-cream "><img src="https://aimstorms.com/aim-data/work/gfm.png" alt="GFM Foods" loading="lazy" class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"><div class="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/70"></div><div class="absolute top-0 left-0 right-0 flex items-center justify-between p-4 font-mono text-[10px] uppercase tracking-widest text-cream mix-blend-difference"><span>07<!-- --> / <!-- -->F&amp;B</span><span>2024</span></div><div class="absolute bottom-0 left-0 right-0 translate-y-2 p-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100"><div class="font-mono text-[10px] uppercase tracking-widest text-electric">Packaging Suite</div><div class="mt-1 flex items-end justify-between gap-3"><h3 class="font-display text-3xl leading-none text-cream md:text-4xl">GFM Foods</h3><span class="font-mono text-xs text-cream">↗</span></div></div></a><a href="https://www.urbantots.in/" target="_blank" rel="noreferrer" class="group relative overflow-hidden bg-cream lg:col-span-2"><img src="https://aimstorms.com/aim-data/work/urbaan.png" alt="Urban Tots" loading="lazy" class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"><div class="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/70"></div><div class="absolute top-0 left-0 right-0 flex items-center justify-between p-4 font-mono text-[10px] uppercase tracking-widest text-cream mix-blend-difference"><span>08<!-- --> / <!-- -->Retail</span><span>2023</span></div><div class="absolute bottom-0 left-0 right-0 translate-y-2 p-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100"><div class="font-mono text-[10px] uppercase tracking-widest text-electric">E-commerce</div><div class="mt-1 flex items-end justify-between gap-3"><h3 class="font-display text-3xl leading-none text-cream md:text-4xl">Urban Tots</h3><span class="font-mono text-xs text-cream">↗</span></div></div></a><a href="https://gsmdoor.com/" target="_blank" rel="noreferrer" class="group relative overflow-hidden bg-cream "><img src="https://aimstorms.com/aim-data/work/gsm.png" alt="GSM Doors" loading="lazy" class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"><div class="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/70"></div><div class="absolute top-0 left-0 right-0 flex items-center justify-between p-4 font-mono text-[10px] uppercase tracking-widest text-cream mix-blend-difference"><span>09<!-- --> / <!-- -->Building</span><span>2023</span></div><div class="absolute bottom-0 left-0 right-0 translate-y-2 p-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100"><div class="font-mono text-[10px] uppercase tracking-widest text-electric">Brand &amp; Web</div><div class="mt-1 flex items-end justify-between gap-3"><h3 class="font-display text-3xl leading-none text-cream md:text-4xl">GSM Doors</h3><span class="font-mono text-xs text-cream">↗</span></div></div></a><a href="https://jainmarble.com/" target="_blank" rel="noreferrer" class="group relative overflow-hidden bg-cream "><img src="https://aimstorms.com/aim-data/work/jainmarbal.png" alt="Jain Marble" loading="lazy" class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"><div class="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/70"></div><div class="absolute top-0 left-0 right-0 flex items-center justify-between p-4 font-mono text-[10px] uppercase tracking-widest text-cream mix-blend-difference"><span>10<!-- --> / <!-- -->Stone</span><span>2023</span></div><div class="absolute bottom-0 left-0 right-0 translate-y-2 p-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100"><div class="font-mono text-[10px] uppercase tracking-widest text-electric">Identity &amp; Web</div><div class="mt-1 flex items-end justify-between gap-3"><h3 class="font-display text-3xl leading-none text-cream md:text-4xl">Jain Marble</h3>
// <span class="font-mono text-xs text-cream">↗</span>
// </div>
// </div>
// </a>
// <a href="https://www.samirikaexports.in/" target="_blank" rel="noreferrer" class="group relative overflow-hidden bg-cream lg:col-span-2">
// <img src="https://aimstorms.com/aim-data/work/samirika.png" alt="Samirika Exports" loading="lazy" class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105">
// <div class="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/70">
// </div><div class="absolute top-0 left-0 right-0 flex items-center justify-between p-4 font-mono text-[10px] uppercase tracking-widest text-cream mix-blend-difference"><span>11<!-- --> / <!-- -->Exports</span>
// <span>2024</span></div><div class="absolute bottom-0 left-0 right-0 translate-y-2 p-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
//     <div class="font-mono text-[10px] uppercase tracking-widest text-electric">Brand &amp; Web</div>
//     <div class="mt-1 flex items-end justify-between gap-3">
//         <h3 class="font-display text-3xl leading-none text-cream md:text-4xl">Samirika Exports</h3><span class="font-mono text-xs text-cream">↗</span>
//         </div>
//         </div></a><a href="https://sdpolytech.com/" target="_blank" rel="noreferrer" class="group relative overflow-hidden bg-cream "><img src="https://aimstorms.com/aim-data/work/sdpoly.png" alt="SD Polytech" loading="lazy" class="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"><div class="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/70"></div><div class="absolute top-0 left-0 right-0 flex items-center justify-between p-4 font-mono text-[10px] uppercase tracking-widest text-cream mix-blend-difference"><span>12<!-- --> / <!-- -->Polymer</span><span>2023</span></div><div class="absolute bottom-0 left-0 right-0 translate-y-2 p-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100"><div class="font-mono text-[10px] uppercase tracking-widest text-electric">Corporate Web</div><div class="mt-1 flex items-end justify-between gap-3"><h3 class="font-display text-3xl leading-none text-cream md:text-4xl">SD Polytech</h3><span class="font-mono text-xs text-cream">↗</span></div></div></a></div></section><section class="border-b border-ink px-6 py-16 md:px-10 md:py-24"><div class="mb-10 flex items-end justify-between"><div><div class="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">— Index</div><h2 class="mt-4 font-display text-5xl md:text-7xl">All projects, A→Z.</h2>
// </div>
// <span class="hidden font-mono text-xs uppercase tracking-widest text-muted-foreground md:block">12<!-- --> entries</span>
// </div><ul class="border-t border-ink"><li class="group border-b border-ink">
//     <a href="https://www.airtreehvac.com/" target="_blank" rel="noreferrer" class="grid grid-cols-12 items-center gap-4 py-5 transition hover:bg-ink hover:text-cream md:py-7">
//     <span class="col-span-1 px-2 font-mono text-xs text-muted-foreground group-hover:text-electric md:px-6">01</span><span class="col-span-6 font-display text-2xl md:col-span-5 md:text-4xl">Airtree</span>
//     <span class="col-span-3 hidden font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-cream/70 md:block">Web &amp; Campaign</span>
//     <span class="col-span-2 font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-cream/70">HVAC</span>
//     <span class="col-span-3 text-right pr-2 md:col-span-1 md:pr-6 font-mono text-xs">↗</span></a></li><li class="group border-b border-ink">
//         <a href="https://amaribath.com/" target="_blank" rel="noreferrer" class="grid grid-cols-12 items-center gap-4 py-5 transition hover:bg-ink hover:text-cream md:py-7">
//         <span class="col-span-1 px-2 font-mono text-xs text-muted-foreground group-hover:text-electric md:px-6">02</span><span class="col-span-6 font-display text-2xl md:col-span-5 md:text-4xl">Amaribath</span>
//         <span class="col-span-3 hidden font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-cream/70 md:block">Identity &amp; Web</span>
//         <span class="col-span-2 font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-cream/70">Wellness</span>
//         <span class="col-span-3 text-right pr-2 md:col-span-1 md:pr-6 font-mono text-xs">↗</span></a></li><li class="group border-b border-ink"><a href="https://brijudyogvihar.com/" target="_blank" rel="noreferrer" class="grid grid-cols-12 items-center gap-4 py-5 transition hover:bg-ink hover:text-cream md:py-7">
//         <span class="col-span-1 px-2 font-mono text-xs text-muted-foreground group-hover:text-electric md:px-6">03</span><span class="col-span-6 font-display text-2xl md:col-span-5 md:text-4xl">Brijudyog</span><span class="col-span-3 hidden font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-cream/70 md:block">Corporate Identity</span>
//         <span class="col-span-2 font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-cream/70">Industrial</span><span class="col-span-3 text-right pr-2 md:col-span-1 md:pr-6 font-mono text-xs">↗</span></a></li><li class="group border-b border-ink"><a href="https://cockcolours.com/" target="_blank" rel="noreferrer" class="grid grid-cols-12 items-center gap-4 py-5 transition hover:bg-ink hover:text-cream md:py-7">
//         <span class="col-span-1 px-2 font-mono text-xs text-muted-foreground group-hover:text-electric md:px-6">04</span><span class="col-span-6 font-display text-2xl md:col-span-5 md:text-4xl">Cockcolours</span><span class="col-span-3 hidden font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-cream/70 md:block">Brand &amp; Packaging</span>
//         <span class="col-span-2 font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-cream/70">F&amp;B</span><span class="col-span-3 text-right pr-2 md:col-span-1 md:pr-6 font-mono text-xs">↗</span></a></li><li class="group border-b border-ink"><a href="https://disedge.ac.in/" target="_blank" rel="noreferrer" class="grid grid-cols-12 items-center gap-4 py-5 transition hover:bg-ink hover:text-cream md:py-7">
//         <span class="col-span-1 px-2 font-mono text-xs text-muted-foreground group-hover:text-electric md:px-6">05</span><span class="col-span-6 font-display text-2xl md:col-span-5 md:text-4xl">Disedge School</span><span class="col-span-3 hidden font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-cream/70 md:block">Brand System</span><span class="col-span-2 font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-cream/70">Education</span><span class="col-span-3 text-right pr-2 md:col-span-1 md:pr-6 font-mono text-xs">↗</span></a></li><li class="group border-b border-ink"><a href="https://gautamiwellness.com/" target="_blank" rel="noreferrer" class="grid grid-cols-12 items-center gap-4 py-5 transition hover:bg-ink hover:text-cream md:py-7"><span class="col-span-1 px-2 font-mono text-xs text-muted-foreground group-hover:text-electric md:px-6">06</span><span class="col-span-6 font-display text-2xl md:col-span-5 md:text-4xl">Gautami Wellness</span><span class="col-span-3 hidden font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-cream/70 md:block">Brand &amp; Packaging</span><span class="col-span-2 font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-cream/70">Wellness</span><span class="col-span-3 text-right pr-2 md:col-span-1 md:pr-6 font-mono text-xs">↗</span></a></li><li class="group border-b border-ink"><a href="https://gfmfoods.in/" target="_blank" rel="noreferrer" class="grid grid-cols-12 items-center gap-4 py-5 transition hover:bg-ink hover:text-cream md:py-7"><span class="col-span-1 px-2 font-mono text-xs text-muted-foreground group-hover:text-electric md:px-6">07</span><span class="col-span-6 font-display text-2xl md:col-span-5 md:text-4xl">GFM Foods</span><span class="col-span-3 hidden font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-cream/70 md:block">Packaging Suite</span><span class="col-span-2 font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-cream/70">F&amp;B</span><span class="col-span-3 text-right pr-2 md:col-span-1 md:pr-6 font-mono text-xs">↗</span></a></li><li class="group border-b border-ink"><a href="https://gsmdoor.com/" target="_blank" rel="noreferrer" class="grid grid-cols-12 items-center gap-4 py-5 transition hover:bg-ink hover:text-cream md:py-7"><span class="col-span-1 px-2 font-mono text-xs text-muted-foreground group-hover:text-electric md:px-6">08</span>
//         <span class="col-span-6 font-display text-2xl md:col-span-5 md:text-4xl">GSM Doors</span><span class="col-span-3 hidden font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-cream/70 md:block">Brand &amp; Web</span>
//         <span class="col-span-2 font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-cream/70">Building</span><span class="col-span-3 text-right pr-2 md:col-span-1 md:pr-6 font-mono text-xs">↗</span></a></li><li class="group border-b border-ink">
//             <a href="https://jainmarble.com/" target="_blank" rel="noreferrer" class="grid grid-cols-12 items-center gap-4 py-5 transition hover:bg-ink hover:text-cream md:py-7"><span class="col-span-1 px-2 font-mono text-xs text-muted-foreground group-hover:text-electric md:px-6">09</span><span class="col-span-6 font-display text-2xl md:col-span-5 md:text-4xl">Jain Marble</span><span class="col-span-3 hidden font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-cream/70 md:block">Identity &amp; Web</span><span class="col-span-2 font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-cream/70">Stone</span><span class="col-span-3 text-right pr-2 md:col-span-1 md:pr-6 font-mono text-xs">↗</span></a></li><li class="group border-b border-ink"><a href="https://www.samirikaexports.in/" target="_blank" rel="noreferrer" class="grid grid-cols-12 items-center gap-4 py-5 transition hover:bg-ink hover:text-cream md:py-7"><span class="col-span-1 px-2 font-mono text-xs text-muted-foreground group-hover:text-electric md:px-6">10</span><span class="col-span-6 font-display text-2xl md:col-span-5 md:text-4xl">Samirika Exports</span><span class="col-span-3 hidden font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-cream/70 md:block">Brand &amp; Web</span><span class="col-span-2 font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-cream/70">Exports</span><span class="col-span-3 text-right pr-2 md:col-span-1 md:pr-6 font-mono text-xs">↗</span></a></li><li class="group border-b border-ink"><a href="https://sdpolytech.com/" target="_blank" rel="noreferrer" class="grid grid-cols-12 items-center gap-4 py-5 transition hover:bg-ink hover:text-cream md:py-7"><span class="col-span-1 px-2 font-mono text-xs text-muted-foreground group-hover:text-electric md:px-6">11</span><span class="col-span-6 font-display text-2xl md:col-span-5 md:text-4xl">SD Polytech</span><span class="col-span-3 hidden font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-cream/70 md:block">Corporate Web</span><span class="col-span-2 font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-cream/70">Polymer</span><span class="col-span-3 text-right pr-2 md:col-span-1 md:pr-6 font-mono text-xs">↗</span></a></li><li class="group border-b border-ink"><a href="https://www.urbantots.in/" target="_blank" rel="noreferrer" class="grid grid-cols-12 items-center gap-4 py-5 transition hover:bg-ink hover:text-cream md:py-7"><span class="col-span-1 px-2 font-mono text-xs text-muted-foreground group-hover:text-electric md:px-6">12</span><span class="col-span-6 font-display text-2xl md:col-span-5 md:text-4xl">Urban Tots</span><span class="col-span-3 hidden font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-cream/70 md:block">E-commerce</span>
//         <span class="col-span-2 font-mono text-xs uppercase tracking-widest text-muted-foreground group-hover:text-cream/70">Retail</span><span class="col-span-3 text-right pr-2 md:col-span-1 md:pr-6 font-mono text-xs">↗</span></a></li></ul></section><section class="bg-ink px-6 py-20 text-cream md:px-10 md:py-28"><div class="grid gap-10 md:grid-cols-12"><div class="md:col-span-8"><div class="font-mono text-xs uppercase tracking-[0.25em] text-electric">— Next in line?</div><h2 class="mt-6 font-display text-5xl leading-[0.9] md:text-[8vw]">Your brand,<br><span class="italic font-light">case study #<!-- -->13</span><span class="text-electric">.</span></h2></div><div class="md:col-span-4 md:col-start-9 self-end space-y-6"><p class="text-cream/70">Got a project in mind? Send the brief — we'll come back within 24 hours with a clear sense of fit and the next step.</p><a href="/#contact" class="inline-flex items-center gap-3 border border-cream px-6 py-4 text-sm uppercase tracking-[0.25em] hover:bg-electric hover:text-ink hover:border-electric transition">Start a project →</a></div></div></section><footer class="border-t border-cream/20 bg-ink px-6 py-10 text-cream md:px-10"><div class="flex flex-wrap items-end justify-between gap-6"><a href="/" class="font-display text-3xl">Aiimstorms<span class="text-electric">.</span></a><div class="font-mono text-xs uppercase tracking-widest text-cream/50">© <!-- -->2026<!-- --> — Built with intent.</div></div></footer></div> 

