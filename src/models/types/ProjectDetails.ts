import { Project } from "./Project";

export type ProjectDetails = Project & {
    title: string;
    course: string;
    description: string[];
    tech: string[];
    github: string;
    livedemo?: string;
    topimage: string;
    demo: string[];
}