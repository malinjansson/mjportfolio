import { useParams } from "react-router"
import { ProjectDetails } from "../models/types/ProjectDetails";
import { ShowProjectDetails } from "../components/ShowProjectDetails";
import { getProjectBySlug } from "../utils/projectUtils";

export const Project = () => {
    const {slug} = useParams();

    const project: ProjectDetails  | undefined = slug
    ? getProjectBySlug(slug) : undefined;

    if (!project) {
        return <p>This project does not exists</p>; 
    }

    return <ShowProjectDetails project={project} />;

}