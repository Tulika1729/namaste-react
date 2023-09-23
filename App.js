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


// const parent = React.createElement(
// "div", 
// {id: "parent"},[
//     React.createElement("div", {id: "child"},
// [
//     React.createElement("h1", {}, "I'm h1 tag of child1, namaste react1"),
//     React.createElement("h2", {}, "I'm h2 tag of child1")
// ]
// ),
// React.createElement("div", {id: "child2"},
// [
//     React.createElement("h1", {}, "I'm h1 tag of child1"),
//     React.createElement("h2", {}, "I'm h2 tag of child1")
// ]
// ),
// ]
// )

// it is creating h1 inside React
//React.createElement gives a React-element which is an object . It is not creating h1 tag
// React.createElement => ReactElement-JS Object => HTMLElement(render)
// const heading = React.createElement(
// "h1", 
// {id: "heading"}, 
// "Hello World from React");

// //now creating a root which is the job of React DOM
// const root = ReactDOM.createRoot(document.getElementById("root"));

//this render method is responsible for taking the heading object and convet it into thr heading tag
// and then put it in the DOM

// ReactElement(Object) => HTML(Browser Understands )
// root.render(parent)


// JSX (transpiled before is reaches the JS, which is done by parcel- BABEL- javascript compiler/transpiler - it takes our code and converts it into which our engine understands)
// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)
// Babel is converting JSX => React.createElement
// const jsxHeading = (<h1 className="head">Namaste React using jsx</h1>)
// console.log("jsxHeading:",jsxHeading);
// root.render(jsxHeading)

//////////////////////////
///--- Functional component----- react element which returns a JSX
const Title = () => {
    return (
        <h1>Namaste REact using JSX</h1>
    )
}

//component composition - when a component is written inside another
const HeadingComponent = () => {
    return (
        <div>
            {/* these 3 things are same */}
            <Title/> 
            {/* this is calling Title React F.c as a function */}
            {Title()}
            <Title></Title>
            <h1>Namaste React Functional component</h1>
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>)
