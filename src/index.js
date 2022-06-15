import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
   faLocationDot,
   faSearch,
   faCartShopping,
   faCaretDown,
   faBars,
} from "@fortawesome/free-solid-svg-icons";

library.add(faLocationDot, faSearch, faCartShopping, faCaretDown, faBars);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>
);
