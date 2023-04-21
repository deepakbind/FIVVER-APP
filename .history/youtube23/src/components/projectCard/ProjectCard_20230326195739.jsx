import React from 'react'
import { Link } from 'react-router-dom'
import "./ProjectCard.scss"
const ProjectCard = ({ item }) => {
    return (
        <Link to="/">
            <div className='projectCard'>
               <img src={item.img} alt="" />
               <div className="info"></div>
            </div>
        </Link>
    );
};
export default ProjectCard;