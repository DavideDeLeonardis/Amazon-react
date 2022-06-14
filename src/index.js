import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faLocationDot, faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";

library.add(faLocationDot, faSearch, faCartShopping);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
