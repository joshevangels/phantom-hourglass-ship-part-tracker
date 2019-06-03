"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var enzyme_1 = require("enzyme");
var React = require("react");
var ShipSeriesCard_component_1 = require("../ShipSeriesCard.component");
describe("ShipSeriesCard Component", function () {
    var defaultSeries = {
        seriesName: "",
        parts: [],
        bonus: [],
    };
    var defaultProps = {
        series: defaultSeries,
    };
    it("Renders the series name as a title", function () {
        var props = {
            series: __assign({}, defaultSeries, { seriesName: "series" }),
        };
        var subject = enzyme_1.shallow(React.createElement(ShipSeriesCard_component_1.ShipSeriesCard, __assign({}, props)));
        var title = subject.find(".title");
        expect(title.text()).toBe("series");
    });
    it("renders each ship part", function () {
        var props = {
            series: __assign({}, defaultSeries, { parts: [
                    "part1",
                    "part2",
                ] }),
        };
        var subject = enzyme_1.shallow(React.createElement(ShipSeriesCard_component_1.ShipSeriesCard, __assign({}, props)));
        var shipParts = subject.find(".ship-part");
        expect(shipParts.length).toBe(2);
    });
    it("renders no bonus if no parts are checked", function () {
        var props = {
            series: __assign({}, defaultSeries, { parts: [
                    "part1",
                    "part2",
                ], bonus: [0, 1, 2] }),
        };
        var subject = enzyme_1.shallow(React.createElement(ShipSeriesCard_component_1.ShipSeriesCard, __assign({}, props)));
        var shipParts = subject.find(".ship-bonus");
        expect(shipParts.text()).toBe("No Bonus");
    });
    it("renders the correct heart bonus total for ship parts selected", function () {
        var props = {
            series: __assign({}, defaultSeries, { parts: [
                    "part1",
                    "part2",
                ], bonus: [0, 1, 2] }),
        };
        var subject = enzyme_1.shallow(React.createElement(ShipSeriesCard_component_1.ShipSeriesCard, __assign({}, props)));
        subject.find(".input-ship-part-part1").simulate("change", { target: { checked: true, name: "have-part1" } });
        subject.update();
        expect(subject.find(".ship-bonus").text()).toBe("+1 Heart");
        subject.find(".input-ship-part-part2").simulate("change", { target: { checked: true, name: "have-part2}" } });
        subject.update();
        expect(subject.find(".ship-bonus").text()).toBe("+2 Hearts");
    });
});
//# sourceMappingURL=ShipSeriesCard.component.spec.js.map