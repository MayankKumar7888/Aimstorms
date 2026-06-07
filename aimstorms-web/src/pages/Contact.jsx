export default function Contact() {
    return (
        <div>
            <section id="contact" className="px-md-5 px-3 py-5">
                <div className="col-12 contact-subHeading">
                    <span>Contact</span>
                </div>
                <h1 className="col-12 contact-heading mt-3 mt-md-4">Let's build something <span className="fst-italic text-orange">remarkable</span><span className="text-orange orange-dot">.</span></h1>
                <div className="col-12 contact-para d-flex justify-content-start justify-content-md-end mt-4">
                    <p className="col-12 col-md-7 col-lg-5">Tell us a bit about your brand and what you're trying to achieve. We'll get back within one business day.</p>
                </div>
            </section>

            <section id="contactForm" className="mx-md-5 mx-3 py-5">
                <div className="col-12">
                    <div className="row g-4 align-items-start">
                        <div className="col-lg-8">
                            <form className="contactForm-form p-4 p-md-5">
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <label className="form-label">Name</label>
                                        <input type="text" className="form-control contactForm-input" placeholder="Mayank Kumar" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control contactForm-input" placeholder="you@brand.com" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Company</label>
                                        <input type="text" className="form-control contactForm-input" placeholder="Acme Inc." />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Budget</label>
                                        <input type="text" className="form-control contactForm-input" placeholder="$10k – $50k" />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label">Project Brief</label>
                                        <textarea className="form-control contactForm-input contactForm-textarea" placeholder="Tell us about your brand, goals and timeline..." required ></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="contactForm-btn" >Send Message <i className="bi bi-arrow-right ms-2"></i></button>
                                    </div>
                                </div>

                            </form>
                        </div>

                        <div className="col-lg-4">
                            <div className="info-card p-4">
                                <div className="info-icon">
                                    <i className="bi bi-envelope"></i>
                                </div>
                                <h3>Email</h3>
                                <p>aimstorms@gmail.com</p>
                            </div>

                            <div className="info-card p-4">
                                <div className="info-icon">
                                    <i className="bi bi-telephone"></i>
                                </div>
                                <h3>Phone</h3>
                                <p>+91 98717 74491</p>
                            </div>

                            <div className="info-card p-4">
                                <div className="info-icon">
                                    <i className="bi bi-geo-alt"></i>
                                </div>
                                <h3>Studio</h3>
                                <p>Greater Noida West, India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}