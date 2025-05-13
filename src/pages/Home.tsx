import { ShowSelectedProjects } from "../components/ShowSelectedProjects";
import { Skills } from "../components/Skills";
import { Techskills } from "../components/Techskills";
import { selectedProject } from "../models/selectedProject";
import "./../styles/home.scss";

export const Home = () => {
    return (
        <>
        <div className="intro-wrapper">
        <div className="intro-container">
            <div className="intro-box">
                <span>
                I'm Malin - I have a Bachelor's Degree in Media and Communication Science 
                and am currently expanding my skills in web development, focusing on e-commerce.
                </span>
                <img className="profile-img" src="src/assets/profileImg.jpg" alt="Profile image"/>
            </div>
        </div>
        <svg className="wave-divider" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path d="M0,160 
                    C540,-80 1080,400 1620,160 
                    L1620,320 L0,320 Z"
                    fill="#eaebe8"
                />
        </svg>
        </div>
    
        <div className="projects-container">
            <h3>Selected projects</h3>
            <ShowSelectedProjects projects={selectedProject} />
        </div>

        <Skills />
        <Techskills/>

        </>
    )
}