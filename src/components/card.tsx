import React from "react";
import "./style.css";


// interface CardProps {
//   data: CardInterface;
// }
interface CardInterface {
  id: number;
  name: string;
  isDone: boolean;
  link: string;
  description: string;
  tag: string;
}



const Card: React.FC<CardInterface> = ({ id, name, isDone, link, description, tag }) => {
  return (
    <div className="card">
      <h2>{name}
      
      </h2>
      
      <p>{description}</p>
      <a href={link} className="card-expand">►</a>
      <span>{tag}</span>

    </div>

  )
}


export default Card;