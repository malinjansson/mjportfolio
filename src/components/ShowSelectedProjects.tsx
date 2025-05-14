import { Project } from "../models/types/Project";
import { ShowProject } from "./ShowProject";

type ShowSelectedProjectsProps = {
    projects: Project[];
}

export const ShowSelectedProjects = (props: ShowSelectedProjectsProps) => {
    return (
        <div className="selected-projects" id="projects">
            {props.projects.map((project) => (
                <ShowProject
                key={project.title}
                project={project}
                />
            ))}
        </div>
    );
};