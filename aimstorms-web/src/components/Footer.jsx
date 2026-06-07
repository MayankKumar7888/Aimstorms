const Footer = () => {
    return (
        <footer className="px-md-5 px-3 pt-4 pb-5 border-top footer">
            <div className="row mt-2 g-2 g-md-0">
                <div className="col-12 col-md-3">
                    <div className="footer-logo d-flex justify-content-center justify-content-md-start">Aimstorms<span className="text-orange orange-dot">.</span></div>
                    <div className="footer-para d-flex justify-content-center justify-content-md-start">Strategic brand consulting</div>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center align-items-end gap-3 footer-para">
                    <a href="#" className="footer-link">Instagram</a>
                    <a href="#" className="footer-link">LinkedIn</a>
                    <a href="#" className="footer-link">Behance</a>
                </div>
                <div className="col-12 col-md-3 d-flex justify-content-center justify-content-md-end align-items-end footer-para">© 2026 — Built with intent.</div>
            </div>
        </footer>
    );
};

export default Footer;
