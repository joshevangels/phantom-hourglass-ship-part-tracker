import {shallow} from "enzyme";
import * as React from "react";
import { IShipSeriesInfo } from "../../ShipSeriesList";
import { IShipSeriesCardProps, ShipSeriesCard } from "../ShipSeriesCard.component";

describe("ShipSeriesCard Component", () => {

    const defaultSeries: IShipSeriesInfo = {
        seriesName: "",
        parts: [],
        bonus: [],
    };

    const defaultProps: IShipSeriesCardProps = {
        series: defaultSeries,
    };

    it("Renders the series name as a title", () => {
        const props: IShipSeriesCardProps = {
            series: {
                ...defaultSeries,
                seriesName: "series",
            },
        };

        const subject = shallow(<ShipSeriesCard {...props}/>);

        const title = subject.find(".title");

        expect(title.text()).toBe("series");
    });

    it("renders each ship part", () => {
        const props: IShipSeriesCardProps = {
            series: {
                ...defaultSeries,
                parts: [
                    "part1",
                    "part2",
                ],
            },
        };

        const subject = shallow(<ShipSeriesCard {...props}/>);

        const shipParts = subject.find(".ship-part");

        expect(shipParts.length).toBe(2);
    });

    it("renders no bonus if no parts are checked", () => {
        const props: IShipSeriesCardProps = {
            series: {
                ...defaultSeries,
                parts: [
                    "part1",
                    "part2",
                ],
                bonus: [0, 1, 2],
            },
        };

        const subject = shallow(<ShipSeriesCard {...props}/>);

        const shipParts = subject.find(".ship-bonus");

        expect(shipParts.text()).toBe("No Bonus");
    });

    it("renders the correct heart bonus total for ship parts selected", () => {
        const props: IShipSeriesCardProps = {
            series: {
                ...defaultSeries,
                parts: [
                    "part1",
                    "part2",
                ],
                bonus: [0, 1, 2],
            },
        };

        const subject = shallow(<ShipSeriesCard {...props}/>);

        subject.find(".ship-part-part1").simulate("change", {target: { checked: true, name: "have-part1"}});

        subject.update();

        expect(subject.find(".ship-bonus").text()).toBe("+1 Heart");

        subject.find(".ship-part-part2").simulate("change", {target: { checked: true, name: "have-part2}"}});

        subject.update();

        expect(subject.find(".ship-bonus").text()).toBe("+2 Hearts");
    });
});
