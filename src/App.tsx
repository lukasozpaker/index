import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Title } from "./components/Title";
import { UnderTitle } from "./components/UnderTitle";
import { CardInterface } from "./Resources";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import FreeBox from "./components/FreeBox";
import { box_data } from "./boxdata";

const App = () => {
    const [topBar, setTopBar] = useState<string>("");
    const [cards, setCards] = useState<CardInterface[]>([]);

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();

        if (topBar) {
            if (topBar == "clear") {
                setCards([]);
                setTopBar("");
                return;
            }

            if (topBar == "help") {
                alert("test");
                setTopBar("");
                return;
            }

            setCards([
                ...cards,
                {
                    id: Date.now(),
                    name: topBar,
                    isDone: false,
                    link: "",
                    description: "",
                    tag: "",
                    tagRight: ""
                },
            ]);

            setTopBar("");
        }
    };

    console.log(cards);
    if (cards.length == 0) {
        setCards(box_data);
    }

    return (
        <div className="App">
            <Header topBar={topBar} setTopBar={setTopBar} handleAdd={handleAdd} />
            <div className="top-cont">
                <Title />

                <FreeBox />

                <UnderTitle />
            </div>

            <CardList cards={cards} setCards={setCards} />
            <Footer />
        </div>
    );
};

export default App;
