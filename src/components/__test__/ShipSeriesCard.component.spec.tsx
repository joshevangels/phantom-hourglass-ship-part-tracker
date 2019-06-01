import {shallow} from "enzyme";
import * as React from "react";
import { IShipSeriesCardProps, ShipSeriesCard } from "../ShipSeriesCard.component";
import { IShipSeriesInfo } from "../../ShipSeriesList";

describe("ShipSeriesCard Component", () => {

    const defaultSeries: IShipSeriesInfo = {
        seriesName: "",
        parts: [],
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
});
