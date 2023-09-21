import React from "react";
import ReactDOM from "react-dom/client";
{/* <div id = "parent">
    <div id = "child">
        <h1>I'm h1 tag of child1</h1>
        <h2>I'm h2 tag of child1</h2>
    </div>
    <div id = "child2">
        <h1>I'm h1 tag of child2</h1>
        <h2>I'm h2 tag of child2</h2>
    </div>
</div> */}


const parent = React.createElement(
"div", 
{id: "parent"},[
    React.createElement("div", {id: "child"},
[
    React.createElement("h1", {}, "I'm h1 tag of child1, namaste react1"),
    React.createElement("h2", {}, "I'm h2 tag of child1")
]
),
React.createElement("div", {id: "child2"},
[
    React.createElement("h1", {}, "I'm h1 tag of child1"),
    React.createElement("h2", {}, "I'm h2 tag of child1")
]
),
]
)

// it is creating h1 inside React
//React.createElement creates an object . It is not creating h1 tag
const heading = React.createElement(
"h1", 
{id: "heading"}, 
"Hello World from React");

//now creating a root which is the job of React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

//this render method is responsible for taking the heading object and convet it into thr heading tag
// and then put it in the DOM

// ReactElement(Object) => HTML(Browser Understands )
root.render(parent)