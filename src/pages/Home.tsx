import "./../styles/home.scss";

export const Home = () => {
    return (
        <>
        <div className="intro-container">
            <div className="intro-box">
                <span>
                I'm Malin - I have a Bachelor's Degree in Media and Communication Science 
                and am currently expanding my skills in web development, focusing on e-commerce.
                </span>
                <img className="profile-img" src="src/assets/profileImg.jpg" alt="Profile image"/>
            </div>
        </div>

        <div className="tech-container">
            <h3>Tech skills</h3>
           
                <ul className="tech-skills">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>SCSS</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>PHP</li>
                    <li>Node.js</li>
                    <li>WebSockets</li>
                    <li>MySQL</li>
                    <li>Github</li>
                    <li>Bootstrap</li>
                    <li>Vite</li>
                    <li>WooCommerce</li>
                    <li>E2E-testning</li>
                    <li>Visual studio code</li>
                    <li>Figma</li>
                    <li>Canva</li>
                </ul>
        </div>

        <div className="skills-scroll-banner">
            <div className="skills-scroll-content">
                <span>
                    ~ Frontend ~ 
                    Backend ~ 
                    System development ~ 
                    E-commerce systems ~ 
                    Payment systems ~ 
                    Database-driven applications 
                    ~ API development  
                </span>
                <span>
                    ~ Frontend ~ 
                    Backend ~ 
                    System development ~ 
                    E-commerce systems ~ 
                    Payment systems ~ 
                    Database-driven applications 
                    ~ API development ~  
                </span>
            </div>
        </div>
        </>
    )
}