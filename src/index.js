import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
   faLocationDot,
   faSearch,
   faCartShopping,
   faCaretDown,
   faBars,
   faStar,
   faSpinner,
   faXmark,
} from "@fortawesome/free-solid-svg-icons";

import App from "./App";

library.add(
   faLocationDot,
   faSearch,
   faCartShopping,
   faCaretDown,
   faBars,
   faStar,
   faSpinner,
   faXmark
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <BrowserRouter>
      <App />
   </BrowserRouter>
);
