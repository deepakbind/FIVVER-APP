import React from 'react'
import {Link} from 'react-router-dom'
import "./ProjectCard.scss"
const ProjectCard = ({item}) => {
  return (
    <Link to="/gig?Project=design">
    <div className='projectCard'>
   <img src={item.img} alt="" />
   <span className='desc'>{item.desc}</span>
   <span className='title'>{item.title}</span>
    </div>
    </Link>
  );
  };
export default ProjectCard;