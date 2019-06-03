"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enzyme_1 = require("enzyme");
var React = require("react");
var Page_component_1 = require("../Page.component");
describe("Page Component", function () {
    it("renders the header component", function () {
        var subject = enzyme_1.shallow(React.createElement(Page_component_1.Page, null));
        var header = subject.find("header");
        expect(header.exists()).toBe(true);
    });
    it("renders the ship cards section", function () {
        var subject = enzyme_1.shallow(React.createElement(Page_component_1.Page, null));
        var content = subject.find(".ship-series-cards");
        expect(content.exists()).toBe(true);
    });
    it("renders all 8 card components", function () {
        var subject = enzyme_1.shallow(React.createElement(Page_component_1.Page, null));
        var cards = subject.find("ShipSeriesCard");
        expect(cards.length).toBe(8);
    });
});
//# sourceMappingURL=Page.component.spec.js.map