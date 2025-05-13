import { useLocation, useParams } from "react-router"
import { ProjectDetails } from "../models/types/ProjectDetails";
import { ShowProjectDetails } from "../components/ShowProjectDetails";
import { getProjectBySlug } from "../utils/projectUtils";
import "./../styles/projectdetails.scss";
import { useEffect } from "react";

export const Project = () => {
    const {slug} = useParams();
    const location = useLocation();
      
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
      
    const project: ProjectDetails  | undefined = slug
    ? getProjectBySlug(slug) : undefined;

    if (!project) {
        return <p>This project does not exists</p>; 
    }

    return <ShowProjectDetails project={project} />;

}