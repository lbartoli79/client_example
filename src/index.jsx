import * as React from 'react';
import ReactDOM from "react-dom";
import Example from "component_test";

const App = () => {
  return (
    <div>
        <Example />
    </div>
  );
};

const el = document.getElementById("app");

ReactDOM.render(<App />, el);