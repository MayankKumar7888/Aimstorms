export default function About() {

    const phases = [
        {
            phase: "Phase 01",
            title: "Discover",
            description:
                "Stakeholder interviews, category audits, customer research and competitive teardown to map the real problem.",
        },
        {
            phase: "Phase 02",
            title: "Define",
            description:
                "Positioning, narrative architecture and a single-page brand brief everyone signs off on before pixels move.",
        },
        {
            phase: "Phase 03",
            title: "Design",
            description:
                "Identity, packaging, web and campaign systems built in tight, weekly review cycles with the founders.",
        },
        {
            phase: "Phase 04",
            title: "Deploy",
            description:
                "Production, launch, performance media and ongoing optimisation measured against the original business KPI.",
        },
    ];

    const teamMembers = [
        {
            name: "Mr. Akilan",
            role: "2d and 3d, Video Team Lead",
            image: "https://aimstorms.com/aim-data/team/akilan.jpeg",
        },
        {
            name: "Mr. Mohit Arya",
            role: "Senior Designer",
            image: "https://aimstorms.com/aim-data/team/mohit-arya.jpeg",
        },
        {
            name: "Mr. Himanshu",
            role: "Social Media Head",
            image: "https://aimstorms.com/aim-data/team/himanshu.jpeg",
        },
    ];

    return (
        <div>
            <section class="px-md-5 px-3 py-5">
                <div class="col-12 about-section-subHeading">
                    <span>About the studio</span>
                </div>
                <h1 class="col-12 about-section-heading mt-3 mt-md-4">A studio that makes brands <span class="fst-italic text-orange">outshine</span><span class="text-orange orange-dot">.</span></h1>
                <div class="col-12 about-section-para d-flex justify-content-start justify-content-md-end mt-4">
                    <p class="col-12 col-md-7 col-lg-5">Aimstorms is a branding & digital studio providing the finest communication and brand solutions that enable businesses and individuals to outshine at their best — blending strategy, design and technology under one roof.</p>
                </div>
            </section>

            <section id="whoWeare" class="mx-md-5 mx-3 pb-5">
                <div>
                    <div class="whoWeare-subHeading">— Who we are</div>
                    <div className="row d-flex align-items-end justify-content-end">
                        <p class="col-12 col-md-6 whoWeare-para mt-2 mt-md-2">A compact, senior team of strategists, designers, engineers and marketers — working out of a single studio in New Delhi, on a short list of brands at a time.</p>
                        <p class="col-12 col-md-4 mt-2 mt-md-0 whoWeare-subpara">We're deliberately small. No layers between you and the people doing the work — founders sit in every review, every week.</p>
                    </div>
                </div>
            </section>

            <section id="howWework" class="mx-md-5 mx-3 pb-5">
                <div>
                    <div class="howWework-subHeading">— How we work</div>
                    <h2 class="mt-3 howWework-heading">A four-phase process<span className="text-orange orange-dot">.</span></h2>
                </div>

                <div className="row g-3 my-3 my-md-4 ">
                    {phases.map((item, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-3">
                            <div className="process-card p-4">
                                <div className="phase-label mb-3">{item.phase}</div>
                                <h3 className="process-title mb-2">{item.title}</h3>
                                <p className="process-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="about-director" className="px-md-5 px-3 py-5">
                <div className="col-12">
                    <div className="row g-0 gap-5 pt-4 pb-0 pt-md-4 pb-md-4">
                        <div className="col-12 col-md-5">
                            <img src="https://aimstorms.com/aim-data/rasbir.jpeg" className="card-img-top" alt="Director Profile" />
                        </div>
                        <div className="col-12 col-lg-6">
                            <div class="about-director-subHeading">— Leadership Note</div>
                            <h2 class="mt-3 mb-4 about-director-heading">Director's Message</h2>
                            <p class="about-director-para">At Aimstorms, we believe every brand has the power to stand out when strategy, creativity, and execution work together. Our vision has always been to help businesses grow with impactful digital experiences, meaningful brand stories, and performance-driven marketing solutions.</p>
                            <p class="about-director-para mb-3 mb-md-5">We are committed to delivering quality, innovation, and long-term value to every client we work with. With a passionate in-house team and a results-oriented mindset, we continue to build solutions that inspire trust and drive growth.</p>
                            <div className="align-items-end d-flex flex-column mt-5">
                                <h5 className="about-director-name">Rasbir Kaur</h5>
                                <h6 className="about-director-subname">Director, Aimstorms</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="team" className="mx-md-5 mx-3 pt-5">
                <div className="col-12 text-center">
                    <h2 className="team-heading">Meet the team</h2>
                </div>
                <div className="col-12">
                    <div className="row justify-content-around pt-4 pb-0 pt-md-5 pb-md-5">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="team-card col-10 col-md-4">
                                <img src={member.image} className="card-img-top team-img rounded-circle mx-auto d-block" alt={member.name} />
                                <div className="card-body text-center">
                                    <h5 className="card-title team-title">{member.name}</h5>
                                    <p className="card-text team-para">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-md-5 mx-3 py-5">
                <figure class="row text-center justify-content-center">
                    <blockquote class="colcol-12 col-md-10 quote-heading"> <span className="text-orange orange-dot">“</span> To provide finest communication and brand consulting solutions that enable businesses and individuals to outshine at their best. <span className="text-orange orange-dot">”</span></blockquote>
                </figure>
            </section>
        </div>
    );
}