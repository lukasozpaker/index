import React from "react";

import "./style.css";
import { TopBar } from "../Resources";

const Search = ({ topBar, setTopBar, handleAdd }: TopBar) => {
    return (
        <form onSubmit={handleAdd}>
            <input
                type="text"
                value={topBar}
                onChange={(e) => setTopBar(e.target.value)}
                id="site-search"
                name="search"
                placeholder="Redirect"
                autoComplete="off"
                aria-label="Search"
                enterKeyHint="enter"
            ></input>
        </form>
    );
};

export default Search;
