import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons: [
            { name: "Max", age: 28, weight: 60 },
            { name: "Manu", age: 29, weight: 60 },
            { name: "Stephanie", age: 26, weight: 60 },
        ],
    };

    switchNameHandler = (newName) => {
        // console.log("was clicked!");
        this.setState({
            persons: [
                { name: newName, age: 28, weight: 50 },
                { name: "Manu", age: 29, weight: 50 },
                { name: "Stephanie", age: 27, weight: 50 },
            ],
        });
    };

    nameChangedHandler = (event) => {
        // console.log("was clicked!");
        this.setState({
            persons: [
                { name: "Maximilian", age: 28, weight: 50 },
                { name: event.target.value, age: 29, weight: 50 },
                { name: "Stephanie", age: 27, weight: 50 },
            ],
        });
    };

    render() {
        const style = {
            backgroundColor: "white",
            fontSize: "14px",
            border: "1px solid #dbdbd",
            padding: "8px",
            cursor: "pointer",
            borderRadius: "5px",
        };
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working!</p>
                <button
                    style={style}
                    onClick={() => this.switchNameHandler("Maximilian")}
                >
                    Switch Name
                </button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    weight={this.state.persons[0].weight}
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    weight={this.state.persons[1].weight}
                    click={this.switchNameHandler.bind(this, "max!")}
                    changed={this.nameChangedHandler}
                />
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                    weight={this.state.persons[2].weight}
                />
            </div>
        );
        // return React.createElement(
        //     "div",
        //     { className: "App" },
        //     React.createElement("h1", null, "Hi I'm H1")
        // );
    }
}

export default App;
