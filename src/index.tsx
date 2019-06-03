import * as React from "react";
import * as ReactDOM from "react-dom";
import { Page } from "./components/Page.component";
import "./css/main.scss";

const renderRootApp = () => {
    ReactDOM.render(React.createElement(Page, null),
                document.getElementById("root"));
};

renderRootApp();
