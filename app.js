import React from "react"; // react is coming from react inside node_modules
import ReactDOM from "react-dom/client";

const Title = () => <p>I am a paragraph</p>;

const HeadingComponent = () => (
  <div className="container">
    <h1 className="heading">Creating Functional Component</h1>
    <Title />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
