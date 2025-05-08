import { Link } from "react-router";
import { Project } from "../models/types/Project";

type ShowProjectProps = {
    project: Project;
  };
  
  export const ShowProject = (props: ShowProjectProps) => {
    return (
        <div className="project-container">
            <Link to={"/project/" + props.project.slug}>
              <div className="project-card">
                <div className="productcard-box"> 
                  <img src={props.project.productCard}/>
                </div>
                  <h4>{props.project.title}</h4>
              </div>
            </Link>
        </div>
    );
  };