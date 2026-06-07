export default function Home() {
    const services = [
        "Brand",
        "Strategy",
        "Design",
        "Storytelling",
        "Performance",
        "Identity",
        "Motion",
        "Code",
    ];

    const serviceList = [
        {
            id: "01",
            title: "Social Media Marketing",
            description:
                "Build & manage digital presence across platforms to drive sales.",
        },
        {
            id: "02",
            title: "Website Design & Dev",
            description:
                "Modern websites — structure, layout & function in HTML, CSS, JS.",
        },
        {
            id: "03",
            title: "Packaging Design",
            description:
                "Carefully crafted packaging that communicates value, lasts in memory.",
        },
        {
            id: "04",
            title: "Product Photoshoot",
            description:
                "Stunning product images that increase sales and build trust.",
        },
        {
            id: "05",
            title: "Brand Videoshoots",
            description:
                "Corporate video aligned to your message and marketing goals.",
        },
        {
            id: "06",
            title: "Public Relations",
            description:
                "Credibility, visibility, and creatively shaped public perception.",
        },
        {
            id: "07",
            title: "Search Engine Optimization",
            description:
                "Improve Google visibility and drive organic traffic, sustainably.",
        },
        {
            id: "08",
            title: "Pay-Per-Click Advertising",
            description:
                "High-converting ad campaigns on Google & social for instant leads.",
        },
        {
            id: "09",
            title: "UI / UX Design",
            description:
                "Intuitive, engaging experiences that improve retention.",
        },
        {
            id: "10",
            title: "E-commerce Development",
            description:
                "Scalable stores, seamless UX, secure payments.",
        },
        {
            id: "11",
            title: "Content Marketing",
            description:
                "Strategic content that educates, engages, and converts.",
        },
        {
            id: "12",
            title: "Email Marketing",
            description:
                "Personalized, high-converting email campaigns.",
        },
    ];

    const portfolioList = [
        {
            id: "01",
            title: "Cockcolours",
            category: "Brand & Packaging",
            year: "2024",
        },
        {
            id: "02",
            title: "Amaribath",
            category: "Identity & Web",
            year: "2024",
        },
        {
            id: "03",
            title: "Disedge School",
            category: "Brand System",
            year: "2023",
        },
        {
            id: "04",
            title: "Airtree HVAC",
            category: "Web & Campaign",
            year: "2024",
        },
        {
            id: "05",
            title: "Brijudyog",
            category: "Corporate Identity",
            year: "2023",
        },
        {
            id: "06",
            title: "Gautami Wellness",
            category: "Brand & Packaging",
            year: "2024",
        },
        {
            id: "07",
            title: "Godavari Foods",
            category: "Packaging Suite",
            year: "2024",
        },
        {
            id: "08",
            title: "Urban Tots",
            category: "E-commerce",
            year: "2023",
        },
    ];

    const clientList = [
        "Cockcolours",
        "Amaribath",
        "Disedge",
        "Airtree",
        "Brijudyog",
        "Gautami Wellness",
        "GFM Foods",
        "GSM Doors",
        "Jain Marble",
        "Samirika Exports",
        "SD Polytech",
        "Urban Tots",
        "Molt & Lava",
        "Ocean Co.",
        "Studio Nord",
        "Heliograph",
    ];

    return (
        <div>
            <section id="home" className=" mx-md-5 mx-3 py-5">
                <div className="d-flex justify-content-between home-inner flex-wrap">
                    <span>Brand Consulting · Greater Noida</span>
                    <span>100+ Brands · 10+ Years</span>
                </div>
                <h1 className="py-3 home-heading">Strategic<br /><span className="fst-italic">brand</span> consulting<span className="text-orange orange-dot">.</span></h1>
                <div className="d-flex justify-content-end py-4">
                    <p className="col-12 col-md-6 home-para">We provide the finest communication and brand consulting solutions that enable businesses and individuals to <em className="underline-word">outshine</em> at their best.</p>
                </div>
                <div className="d-flex flex-column flex-sm-row gap-3 mb-5">
                    <a href="#contact" className="btn py-2 py-md-3 px-2 px-md-4 home-btn1">Get Started <i className="bi bi-arrow-right nav-icon arrow-right"></i></a>
                    <a href="#work" className="btn py-2 py-md-3 px-2 px-md-4 home-btn2">View Work</a>
                </div>
                <div className="row mb-5 pt-0 mx-1 px-0 pt-md-5">
                    <div className="col-6 col-md-3 px-2 px-sm-5 py-2 py-sm-5 border-1 border border-dark">
                        <div className="home-font-display">10+</div>
                        <div className="home-para-display">Years experience</div>
                    </div>
                    <div className="col-6 col-md-3 px-2 px-sm-5 py-2 py-sm-5 border-1 border border-dark">
                        <div className="home-font-display">360°</div>
                        <div className="home-para-display">Marketing solutions</div></div>
                    <div className="col-6 col-md-3 px-2 px-sm-5 py-2 py-sm-5 border-1 border border-dark">
                        <div className="home-font-display">120+</div>
                        <div className="home-para-display">Brands served</div>
                    </div>
                    <div className="col-6 col-md-3 px-2 px-sm-5 py-2 py-sm-5 border-1 border border-dark">
                        <div className="home-font-display">14</div>
                        <div className="home-para-display">Core capabilities</div>
                    </div>
                </div>
            </section>

            <section className="col-12 py-4 marquee-section">
                <div className="marquee">
                    <div className="marquee-content">
                        {services.map((item, index) => (
                            <span key={`first-${index}`} className="me-5 rolling-services">
                                {item} <span className="text-electric rolling-services text-orange">✦</span>
                            </span>
                        ))}
                    </div>

                    <div className="marquee-content" aria-hidden="true">
                        {services.map((item, index) => (
                            <span key={`second-${index}`} className="me-5 rolling-services">
                                {item} <span className="text-electric rolling-services text-orange">✦</span>
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <section id="services" className="mx-md-5 mx-3 py-5">
                <div>
                    <div className="services-subHeading">— Core Capabilities</div>
                    <div className="row d-flex align-items-end">
                        <h2 className="col-12 col-md-7 services-home-font-display">Our services<span className="text-orange orange-dot">.</span></h2>
                        <p className="col-12 col-md-5 service-para mt-2 mt-md-0">Twelve disciplines under one roof. Each engagement is custom-shaped, but the standard is invariant: it has to move the business and read like the brand.</p>
                    </div>
                </div>

                <div className="row justify-content-around py-3 g-0">
                    {serviceList.map((serviceData) => (
                        <article
                            key={serviceData.id}
                            className="service-card col-12 col-sm-6 col-md-4 p-3 p-md-4 p-lg-5 border-1 border-dark border"
                        >
                            <div className="d-flex justify-content-between services-numbox ">
                                <span className="mb-4 service-num">
                                    {serviceData.id}
                                </span>
                                <span className="arrow">
                                    ↗
                                </span>
                            </div>

                            <h3 className="services-heading">
                                {serviceData.title}
                            </h3>

                            <p className="mt-3 service-para ">
                                {serviceData.description}
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            <section id="work" className="px-3 px-md-5 py-5 border-bottom border-top border-dark">
                <div className="">
                    <div className="work-subHeading">— Case Studies</div>
                    <div className="row align-items-end">
                        <h2 className="col-12 col-md-8 mt-4 font-display text-6xl md:text-8xl work-heading">Work, in public<span className="text-orange orange-dot">.</span></h2>
                        <a href="#" className="col-12 col-md-4 text-end work-project-btn">All projects <i className="bi bi-arrow-right"></i></a>
                    </div>
                </div>
                <ul className="portfolio-list my-5">
                    {portfolioList.map((item) => (
                        <li key={item.id} className="portfolio-item">
                            <a href="#" className="row portfolio-link justify-content-around g-0">
                                <span className="col-12 col-md-1 portfolio-number portfolioList-para">{item.id}</span>

                                <span className="col-12 col-md-4 mt-3 mt-md-0 portfolio-title portfolioList-heading">
                                    {item.title}
                                </span>

                                <span className="col-12 col-md-3 my-2 my-md-0 portfolio-category portfolioList-para">
                                    {item.category}
                                </span>

                                <span className="col-6 col-md-1 portfolio-year portfolioList-para">
                                    {item.year}
                                </span>

                                <span className="col-6 col-md-1 portfolio-arrow text-end portfolioList-para">
                                    →
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>

            <section id="clients" className="mx-md-5 mx-3 py-5">
                <div>
                    <div className="client-subHeading">— Client Feedback</div>
                    <h2 className="client-heading mt-3 mt-md-0">Trusted by leaders<span className="text-orange orange-dot">.</span></h2>
                </div>
                <div className="row text-center g-0 py-5">
                    {clientList.map((client, index) => (
                        <div key={index} className="col-6 col-sm-3 col-md-2 border-dark border client-card ">
                            {client}
                        </div>
                    ))}
                </div>

                <figure className="row d-flex align-items-center justify-content-center">
                    <div className="col-12 col-md-10 quote-comma">“</div>
                    <blockquote className="colcol-12 col-md-10 quote-heading">Working with Aimstorms felt less like hiring an agency and more like adding a creative co-founder. Sharp instincts, ruthless edits, and a brand we finally recognize in the mirror.</blockquote>
                    <figcaption className="col-12 col-md-10 mt-3 quote-para">— Founder, Gautami Wellness</figcaption>
                </figure>
            </section>

            <section id="ready" className="px-md-5 px-3 py-5">
                <div className="row mb-0 mb-md-5">
                    <div className="col-12 col-md-6">
                        <div className="ready-subHeading">— Ready to start?</div>
                        <h2 className="ready-heading mt-3 mt-md-0">Let's build the<br /><span className="fst-italic fw-light">version 2.0</span> of your brand<span className="text-orange orange-dot">.</span></h2>
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-end">
                        <p className="ready-para mt-4 mt-md-5 pb-3">Tell us what you're building. We reply within 24 hours with a clear sense of fit, scope, and the next concrete step.</p>
                        <a href="mailto:hello@aimstorms.com" className="btn py-2 py-md-3 px-2 px-md-4 ready-btn align-self-start">hello@aimstorms.com →</a>
                    </div>
                </div>
            </section>
        </div >
    );
};
