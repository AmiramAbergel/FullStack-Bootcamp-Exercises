import React from "react";
import "./Cards.css";
const Cards = (props) => {
    return (
        <div className="cardContainer">
            <img className="img" src={props.img} alt=""></img>
            <div className="titleContainer">
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
            </div>
            <div className="links">
                <a
                    className="cardInfo__links--a"
                    href={props.share}
                    target="_blank"
                    rel="noreferrer"
                >
                    SHARE
                </a>
                <br />
                <a
                    className="cardInfo__links--a"
                    href={props.explore}
                    target="_blank"
                    rel="noreferrer"
                >
                    EXPLORE
                </a>
            </div>
        </div>
    );
};

export default Cards;
