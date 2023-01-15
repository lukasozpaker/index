import React from "react";
import "./style.css";


export class UnderTitle extends React.Component {
    constructor(props:any){
        super(props);
        this.state = {

        };
    }


    render(): React.ReactNode {
        return (
            <div className="underTitle">


                <a href="https://www.github.com/lukasozpaker">
                    Github
                    <div></div>
                </a>
                <a href="https://www.linkedin.com/in/lukasozpaker">
                    LinkedIn
                    <div></div>
                </a>


                <p>
                    Below are a number of web and mobile applications I've worked on in the past. Some are still in development and a few are now deprecated due to API changes among other reasons. The experimental command line is currently not intended for use so use it at your own risk.
                </p>
            </div>
        )
    }
}