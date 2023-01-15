import React from "react";
import { CardInterface } from "../components/cardinterface";
import Card from "../components/card";
import "./style.css";

interface Props {
    todos: CardInterface[];
    setTodos: React.Dispatch<React.SetStateAction<CardInterface[]>>;
}

const CardList:React.FC<Props> = ({todos, setTodos}) => {
    return (
        <div className="cardlist">
            {
            todos.map((curr:CardInterface) => (
                // <li key={name.id}>{name.name}</li>
                <Card key={curr.id} {...curr}/>
                
            ))}
        </div>
    );
    
};

export default CardList;