import { Project } from "../models/types/Project";
import { ShowProject } from "./ShowProject";

type ShowProjectsProps = {
    projects: Project[];
}

export const ShowProjects = (props: ShowProjectsProps) => {
    return (
        <div className="projects">
            {props.projects.map((project) => (
                <ShowProject
                key={project.title}
                project={project}
                />
            ))}
        </div>
    );
};