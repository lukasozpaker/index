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

                <p>Bachelor of Science in Computer Engineering. Archive of some old projects.</p>
            </div>
        );
    }
}
