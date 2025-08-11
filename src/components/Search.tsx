import React, { useState } from "react";

import "./style.css";
import { HeaderProps } from "../Resources";

const Search = ({ topBar, setTopBar, handleAdd, searchInputRef }: HeaderProps) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <form onSubmit={handleAdd}>
            <input
                type="text"
                value={topBar}
                onChange={(e) => setTopBar(e.target.value)}
                className="search-bar"
                name="search"
                // placeholder="Press '/' or 'i' to focus"
                placeholder={
                    isFocused
                        ? "Press 'Esc' or 'Ctrl+[' to unfocus"
                        : "Press '/' or 'i' to focus"
                }
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                autoComplete="off"
                aria-label="Search"
                enterKeyHint="enter"
                ref={searchInputRef}
            ></input>
        </form>
    );
};

export default Search;
