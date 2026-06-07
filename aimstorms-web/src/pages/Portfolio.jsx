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
                        <button key={item} className={`filter-btn ${index === 0 ? "active" : ""}`}>{item}</button>
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





