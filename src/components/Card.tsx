import React from "react";
import "./style.css";
import { CardInterface } from "../Resources";

const Card: React.FC<CardInterface> = ({
    id,
    name,
    isDone,
    link,
    description,
    tag,
    tagRight
}) => {
    return (
        <div className="card">
            <h2>{name}</h2>

            <p>{description}</p>
            <a href={link} className="card-expand">
                ►
            </a>
            <span className="tag">{tag}</span>
            <span className="tagRight">{tagRight}</span>
        </div>
    );
};

export default Card;
