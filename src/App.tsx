import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import { Title } from "./components/Title";
import { UnderTitle } from "./components/UnderTitle";
import { CardInterface } from "./Resources";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import FreeBox from "./components/FreeBox";
import ThemeToggleButton from "./components/ThemeToggleButton";
import { box_data } from "./boxdata";

const App = () => {
    const [topBar, setTopBar] = useState<string>("");
    const [cards, setCards] = useState<CardInterface[]>([]);
    const searchInputRef = useRef<HTMLInputElement>(null);

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

    const redirectToLLM = (e: React.FormEvent) => {
        e.preventDefault();
        const llmUrl = "https://chatgpt.com/?q=";
        const query = topBar.trim();
        if (query) {
            window.open(llmUrl + query, "_blank");
        }
        setTopBar("");
    }

    if (cards.length == 0) {
        setCards(box_data);
    }

    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            if (e.key == "/" || e.key == "i") { 
                if(document.activeElement && document.activeElement.tagName != "INPUT" && document.activeElement.tagName != "TEXTAREA") {
                    e.preventDefault();
                    searchInputRef.current?.focus();
                }
            } else if (e.key == "Escape" || e.ctrlKey && e.key == "[" || e.ctrlKey && e.key == "c") {
                if (document.activeElement == searchInputRef.current) {
                    e.preventDefault();
                    searchInputRef.current?.blur();
                }
            }
        };

        document.addEventListener("keydown", handleKeydown);
        return () => {
            document.removeEventListener("keydown", handleKeydown);
        };
    }, []);

    return (
        <div className="App">
            <Header topBar={topBar} setTopBar={setTopBar} topBarCallback={redirectToLLM} searchInputRef={searchInputRef}/>
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
