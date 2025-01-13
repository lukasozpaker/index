import React from "react";
import Card from "../components/Card";
import "./style.css";
import { CardInterface, Cards } from "../Resources";


const CardList: React.FC<Cards> = ({ cards, setCards }) => {
    return (
        <div className="cardlist">
            {cards.map((curr: CardInterface) => (
                <Card key={curr.id} {...curr} />
            ))}
        </div>
    );
};

export default CardList;
