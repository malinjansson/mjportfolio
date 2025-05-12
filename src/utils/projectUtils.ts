import { projectDetails } from "../models/projectDetails";
import { ProjectDetails } from "../models/types/ProjectDetails";

export const getProjectBySlug = (slug: string): ProjectDetails | undefined => {
    return projectDetails.find(project => project.slug === slug);
};