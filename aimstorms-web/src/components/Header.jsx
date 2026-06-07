import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="sticky-top navbar-glass">
            <nav className="navbar navbar-expand-lg px-md-5 px-3 py-3">
                <div className="container-fluid">
                    <NavLink className="navbar-brand logo font-display" to="/">Aimstorms<span className="text-orange orange-dot">.</span></NavLink>
                    <button className="navbar-toggler menu-icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="bi bi-list fs-1"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mx-auto text-center mt-4 mt-md-0 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/home" aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/portfolio">Portfolio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/about" >About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/contact" >Contact</NavLink>
                            </li>
                        </ul>
                        <div className="text-center text-lg-start">
                            <a href="/contact" className="btn btn-outline-dark nav-btn py-2">
                                Start a project <i className="bi bi-arrow-right nav-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;