import { ProjectDetails } from "../models/types/ProjectDetails"

type ShowProjectDetailsProps = {
    project: ProjectDetails;
}

export const ShowProjectDetails = (props: ShowProjectDetailsProps) => {
    return (
        <>
        <div className="project-details-container">
            <div className="project-details-flex">
                <div className="project-info">
                    <h3>{props.project.title}</h3>
                    <span className="project-course">{props.project.course}</span>
                    <span className="project-description">{props.project.description}</span>
                    <ul className="tech-list">
                        {props.project.tech.map((tech, i) => (
                            <li key={i}>{tech}</li>
                        ))}
                    </ul>
                    <a href={props.project.github} target="_blank"><span className="github-btn">View the code on Github</span></a>
                </div>
                <img className="project-topimage" src={props.project.topimage} alt={props.project.title} />
            </div>
            <div className="project-demo">
                {props.project.demo.map((demo, i) => (
                    <img key={i} src={demo} className="demo-image" />
                ))}
            </div>
        </div>
        </>
    )
}