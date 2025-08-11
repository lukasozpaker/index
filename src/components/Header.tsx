import React from "react";
import Search from "./Search";
import "./style.css";
import { HeaderProps } from "../Resources";
import ThemeToggleButton from "./ThemeToggleButton";


const Header = ({ topBar: topBar, setTopBar: setTopBar, handleAdd, searchInputRef }: HeaderProps) => {
    return (
        <div className="header">
            <Search
                topBar={topBar}
                setTopBar={setTopBar}
                handleAdd={handleAdd}
                searchInputRef={searchInputRef}
            ></Search>
            <ThemeToggleButton/>
        </div>
    );
};

export default Header;
