import React from 'react'
import { Link } from 'react-router-dom'
import "./ProjectCard.scss"
const ProjectCard = ({ item }) => {
    return (
        <Link to="/">
            <div className='projectCard'>
               <img src={item.img} alt="" />
               <div className="info">
               <img src={item.pp} alt="" />
               </div>
            </div>
        </Link>
    );
};
export default ProjectCard;