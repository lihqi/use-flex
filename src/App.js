import React, { useState } from "react";

import "./App.css";

function App() {
    const [value, setValue] = useState("赛风赛森送扥森孙");
    const [val, setVal] = useState("赛风赛森送扥森孙赛风赛森送扥森孙");
    const [flexA, setFlexA] = useState("赛风赛森送扥森孙");
    const [flexB, setFlexB] = useState("赛风赛");
    return (
        <div className="App">
            <header className="App-header">
                <div className="container ">
                    <span className="value ellipsis">{value}</span>
                    <span className="val ellipsis">{val}</span>
                </div>
                <input
                    type="text"
                    onChange={e => {
                        setValue(e.target.value);
                    }}
                    value={value}
                />
                <input
                    type="text"
                    onChange={e => {
                        setVal(e.target.value);
                    }}
                    value={val}
                />
            </header>
            <div className="container flex">
                <span className="flexA ellipsis">{flexA}</span>
                <span className="flexB ">{flexB}</span>
            </div>
            <input
                type="text"
                onChange={e => {
                    setFlexA(e.target.value);
                }}
                value={flexA}
            />
            <input
                type="text"
                onChange={e => {
                    setFlexB(e.target.value);
                }}
                value={flexB}
            />
        </div>
    );
}

export default App;
