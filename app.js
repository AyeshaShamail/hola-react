/*    <div id="parent">
      <div id="child">
        <h1>I am a heading made from React</h1>
      </div>
    </div>
*/
import React from "react"; // react is coming from react inside node_modules
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" },
    [
      React.createElement("h1", {}, "This is a heading built from Ayesha"),
      React.createElement(
        "h1",
        {},
        "This is second heading which is sibling of 1st heading"
      ),
    ] //For siblings , keep it in array.
  ),
  React.createElement(
    "div",
    { id: "child" },
    [
      React.createElement("h1", {}, "This is a heading built from React"),
      React.createElement(
        "h1",
        {},
        "This is second heading which is sibling of 1st heading"
      ),
    ] //For siblings , keep it in array.
  ),
]);

console.log("parent");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
