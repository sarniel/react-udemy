import React, { Component } from "react";
import "./Person.css";

const person = (props) => {
    return (
        <div className="person">
            <p>
                I'm {props.name} {props.age} years old and {props.weight}kg
                weight
            </p>
            <p>
                <input type="text" value={props.name} />
            </p>
        </div>
    );
};

export default person;
