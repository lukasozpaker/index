import React from "react";
import Search from "./search";
import "./style.css";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent) => void;
}

const Header = ({todo, setTodo,handleAdd}:Props) => {
    return (
        <div className="header">
            <Search todo={todo} setTodo={setTodo} handleAdd={handleAdd}></Search>
        </div>
    )
};

export default Header;