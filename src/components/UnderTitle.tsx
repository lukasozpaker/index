import React from "react";
import "./style.css";

export class UnderTitle extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {};
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
                    <a href="https://buy.stripe.com/test_9AQdRd6hEePA62ccMM">
                        Stripe
                        <div></div>
                    </a>
                </div>

                <p>Computer Engineer. Below are a couple of old projects I've built over the years. Some are still in development and a few are now deprecated due to API changes.</p>
            </div>
        );
    }
}
