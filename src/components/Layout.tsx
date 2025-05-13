import { useState } from "react";
import { NavLink, Outlet } from "react-router";
import "./../styles/layout.scss";

export const Layout = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <>
        <header className="header">
            <NavLink to={"/"} className="portfolio-name">Malin Jansson</NavLink>
            <div className="menu-toggle" onClick={toggleMenu}>
                {menuOpen ? "x" : "☰"}
            </div>
            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/aboutme">About me</a></li>
                <li><a href="/projects">Projects</a></li>
                </ul>
                <ul className="nav-some-links">
                <li>
                    <a href="https://www.linkedin.com/in/malin-jansson-20020420b/" target="_blank"><i className="fa fa-linkedin-square"></i></a>
                    <a href="https://github.com/malinjansson" target="_blank"><i className="fa fa-github"></i></a>
                    <a href="mailto:maalin.jaansson@gmail.com" target="_blank"><i className="fa fa-envelope-square"></i></a>
                </li>
                </ul>
            </nav>
        </header>

        <main>
            <Outlet/>
        </main>

        <footer>
            <div className="footer-container">
                <h3>Let's connect and talk!</h3>
                <span>maalin.jaansson@gmail.com</span>
                <ul className="so-me-links">
                    <li>
                        <a href="https://www.linkedin.com/in/malin-jansson-20020420b/" target="_blank">
                            <i className="fa fa-linkedin-square"></i>
                        </a>
                        <a href="https://github.com/malinjansson" target="_blank">
                            <i className="fa fa-github"></i>
                        </a>
                        <a href="mailto:maalin.jaansson@gmail.com" target="_blank">
                            <i className="fa fa-envelope-square"></i>
                        </a>
                    </li>
                </ul>
                <span className="footer-bottom">Portfolio, Malin Jansson, 2025</span>
            </div>
        </footer>
        </>
    )
}