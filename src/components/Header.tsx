import React from "react";
import Search from "./Search";
import "./style.css";
import { TopBar } from "../Resources";

const Header = ({ topBar: topBar, setTopBar: setTopBar, handleAdd }: TopBar) => {
    return (
        <div className="header">
            <Search
                topBar={topBar}
                setTopBar={setTopBar}
                handleAdd={handleAdd}
            ></Search>
        </div>
    );
};

export default Header;
