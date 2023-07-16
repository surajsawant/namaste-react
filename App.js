import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpiled before it reaches the JS) - Parcel - Babel

// JSX => Babel transiles jsx to React.createElement => ReactElement - JS object => HTMLElement (render)

const Title = function () {
  return (
    <h1 className="head" tabIndex="5">
      Namaste React using JSX
    </h1>
  );
};

//Component Composition
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
