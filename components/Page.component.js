"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ShipSeriesList_1 = require("../ShipSeriesList");
var ShipSeriesCard_component_1 = require("./ShipSeriesCard.component");
var spreadsheetLink = "https://docs.google.com/"
    + "spreadsheets/d/1VoeIV9eRJQIH09M5XZ-fRRq7WhfdgCxWEsEI9CiMHuA/edit#gid=1032763275";
var Page = /** @class */ (function (_super) {
    __extends(Page, _super);
    function Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Page.prototype.render = function () {
        return (React.createElement("div", { className: "page" },
            React.createElement("header", null,
                React.createElement("h2", null, "Phantom Hourglass Ship Part Tracker"),
                React.createElement("p", null,
                    "inspired by",
                    React.createElement("a", { className: "outer-link", href: spreadsheetLink }, " chuggaaconroy's ship part spreadsheet")),
                React.createElement("p", null,
                    React.createElement("a", { className: "outer-link", href: "https://www.youtube.com/user/chuggaaconroy" }, "chuggaaconroy's channel"))),
            React.createElement("main", null,
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "ship-series-cards row" }, this.renderShipCards())))));
    };
    Page.prototype.renderShipCards = function () {
        return ShipSeriesList_1.AllSeries.map(function (series) {
            return React.createElement(ShipSeriesCard_component_1.ShipSeriesCard, { key: "ship-series-" + series.seriesName, series: series });
        });
    };
    return Page;
}(React.Component));
exports.Page = Page;
//# sourceMappingURL=Page.component.js.map