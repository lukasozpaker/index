import React from "react";
import "./style.css";


function test(){
    alert("This is a test");
}

export class UnderTitle extends React.Component {
    constructor(props:any){
        super(props);
        this.state = {

        };
    }


    render(): React.ReactNode {
        return (
            <div className="underTitle">

                <div className="link-cont">
                    <a href="https://www.github.com/lukasozpaker">
                        Github
                        <div></div>
                    </a>
                    <a href="https://www.linkedin.com/in/lukasozpaker">
                        LinkedIn
                        <div></div>
                    </a>
                    <a href="https://buy.stripe.com/test_9AQdRd6hEePA62ccMM" /*onClick={test}*/>
                        Stripe
                        <div></div>
                    </a>
                </div>

                <p>
                    Below are a number of web and mobile applications I've worked on in the past. Some are still in development and a few are now deprecated due to API changes among other reasons. The experimental command line is currently not intended for use so use it at your own risk.
                </p>
            </div>
        )
    }
}