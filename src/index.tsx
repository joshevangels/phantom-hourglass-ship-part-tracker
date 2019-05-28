import * as ReactDOM from "react-dom";
import * as React from "react";
import "./css/main.scss"
import { Page } from "./components/Page.component";

const renderRootApp = () => {
    ReactDOM.render(React.createElement(Page, null),
                document.getElementById("root"));
}

renderRootApp();
