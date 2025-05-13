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
                    <div className="project-details-heading">
                        <h3>{props.project.title}</h3>
                        <span className="project-course">{props.project.course}</span>
                    </div>
                    <div className="project-description">
                        {props.project.description.map((description, i) => (
                            <li key={i}>{description}</li>
                        ))}
                    </div>
                    <div className="project-tech">
                        <h4>Tech</h4>
                        <ul className="tech-list">
                            {props.project.tech.map((tech, i) => (
                                <li key={i}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                    <a href={props.project.github} target="_blank"><span className="github-btn">View the code on Github</span></a>
                </div>
                <div className="project-top-image-container">
                    <div className="background-color-box"></div>
                    <img className="project-topimage" src={props.project.topimage} alt={props.project.title} />
                </div>
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