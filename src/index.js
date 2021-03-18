import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const stuff = [{ id: 1, name: "Drashti" }, { id: 2, name: "Pooja" }];

ReactDOM.render(<App stuff={stuff} />, document.getElementById("root"));
