import { Link } from "react-router";
import { Project } from "../models/types/Project";

type ShowProjectProps = {
    project: Project;
  };
  
  export const ShowProject = (props: ShowProjectProps) => {
    return (
        <Link to={"/project/" + props.project.slug}>
            <div className="project-card">
                <img src={props.project.productCard}/>
                <h4>{props.project.title}</h4>
             </div>
        </Link>
    );
  };