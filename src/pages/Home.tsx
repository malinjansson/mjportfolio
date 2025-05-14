import { Aboutme } from "../components/Aboutme";
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
                <span>{"<"} Ecommerce</span>
                <span>Web developer /{">"}</span>
            </div>
            <img className="profile-img" src="/assets/profileImg.jpg" alt="Profile image"/>
        </div>
        <svg className="wave-divider" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path d="M0,160 
                    C540,-80 1080,400 1620,160 
                    L1620,320 L0,320 Z"
                    fill="#eaebe8"
                />
        </svg>
        </div>

        <Aboutme />
        <Skills />
        <Techskills/>
        
    
        <div className="projects-container" id="projects">
            <h3>Selected projects</h3>
            <ShowSelectedProjects projects={selectedProject} />
        </div>

        </>
    )
}