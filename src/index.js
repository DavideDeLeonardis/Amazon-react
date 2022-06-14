import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

library.add(faLocationDot);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
