import React from "react";



import "./style.css";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent) => void;
}

const Search = ({todo, setTodo, handleAdd}:Props) => {

    return (
        <form onSubmit={handleAdd}>
        <input type="text" 

            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            id="site-search" 
            name="search" 
            placeholder="Experimental Command Line" 
            autoComplete="off" 
            aria-label="Search"
            enterKeyHint="enter"
        >

        </input>
        </form>
    )
}

export default Search;