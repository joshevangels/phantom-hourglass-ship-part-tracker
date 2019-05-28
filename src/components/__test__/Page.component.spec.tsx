import {shallow, ShallowWrapper} from "enzyme";
import * as React from "react";
import { Page } from '../Page.component';

describe("Page Component", () => {
    it("renders the header component", () => {
        const subject = shallow(<Page/>);

        const header = subject.find("header");

        expect(header.exists()).toBe(true);
    });

    it("renders the ship cards section", () => {
        const subject = shallow(<Page/>);

        const content = subject.find(".ship-cards");

        expect(content.exists()).toBe(true);
    });

    it("renders 5 card components", () => {
        const subject = shallow(<Page/>);

        const cards = subject.find("ShipCard");

        expect(cards.length).toBe(5);
    });
});
