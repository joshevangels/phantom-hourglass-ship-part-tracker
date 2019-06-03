"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReactDOM = require("react-dom");
var React = require("react");
require("./css/main.scss");
var Page_component_1 = require("./components/Page.component");
var renderRootApp = function () {
    ReactDOM.render(React.createElement(Page_component_1.Page, null), document.getElementById("root"));
};
renderRootApp();
//# sourceMappingURL=index.js.map