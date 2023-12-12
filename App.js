import React from "react";
import ReactDOM from "react-dom";

// Using core React method
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

// Using JSX method
const jsxHeading = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);

console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Use the root API consistently
root.render(
  <>
    {heading}
    {jsxHeading}
  </>
);
