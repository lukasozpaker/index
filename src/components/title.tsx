import React from "react";
import "./style.css";


export class Title extends React.Component {

    constructor(props:any){
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <div className="title">
                <h1 className="first">Lukas</h1>
                <h1 className="second">Ozpaker</h1>
            </div>
        )
    }
}