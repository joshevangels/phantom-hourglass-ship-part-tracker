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
var ShipSeriesCard = /** @class */ (function (_super) {
    __extends(ShipSeriesCard, _super);
    function ShipSeriesCard(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (event) {
            var count = _this.state.partCount;
            var newValue = event.target.checked ? count + 1 : count - 1;
            _this.setState({ partCount: newValue });
        };
        _this.state = {
            partCount: 0,
        };
        return _this;
    }
    ShipSeriesCard.prototype.render = function () {
        return (React.createElement("div", { className: "ship-series-card col-sm-12 col-md-6 col-lg-3" },
            React.createElement("div", { className: "title" }, this.props.series.seriesName),
            React.createElement("form", { className: "ship-parts" }, this.renderParts(this.props.series.parts)),
            React.createElement("div", { className: "ship-bonus" }, this.renderBonus())));
    };
    ShipSeriesCard.prototype.renderBonus = function () {
        var bonus = this.props.series.bonus[this.state.partCount];
        if (bonus === 0) {
            return "No Bonus";
        }
        else if (bonus === 1) {
            return "+1 Heart";
        }
        else {
            return "+" + bonus + " Hearts";
        }
    };
    ShipSeriesCard.prototype.renderParts = function (parts) {
        var _this = this;
        return parts.map(function (part) {
            var className = part.replace(" ", "-");
            return (React.createElement("label", { className: "ship-part ship-part-" + className, key: "ship-part-" + className },
                React.createElement("input", { className: "input-ship-part-" + className, name: "have-" + className, type: "checkbox", onChange: _this.handleChange }), "  " + part));
        });
    };
    return ShipSeriesCard;
}(React.Component));
exports.ShipSeriesCard = ShipSeriesCard;
//# sourceMappingURL=ShipSeriesCard.component.js.map