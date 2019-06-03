export interface IShipSeriesInfo {
    seriesName: string;
    parts: string[];
    bonus: number[];
}

const BrightSeries: IShipSeriesInfo = {
    seriesName: "Bright Series",
    parts: [
        "Bell Prow",
        "Bell Anchor",
        "Bright Hull",
        "Artistic Cannon",
        "Arch Handrail",
        "Restful Cabin",
        "Elegant Chimney",
        "Paddling Wheel",
    ],
    bonus: [0, 0, 0, 1, 1, 1, 2, 2, 3],
};
const IronSeries: IShipSeriesInfo = {
    seriesName: "Iron Series",
    parts: [
        "Drill Prow",
        "Iron Anchor",
        "Iron Hull",
        "Strong Cannon",
        "Chain Handrail",
        "Conning Tower",
        "Parasol Chimney",
        "Battle Wheel",
    ],
    bonus: [0, 0, 0, 1, 1, 1, 2, 2, 3],
 };
const StoneSeries: IShipSeriesInfo = {
    seriesName: "Stone Series",
    parts: [
        "Mermaid Prow",
        "Ancient Anchor",
        "Stone Hull",
        "Ancient Cannon",
        "Pillar Handrail",
        "Peaceful Bridge",
        "Stone Chimney",
        "Rock Wheel",
    ],
    bonus: [0, 0, 0, 1, 1, 1, 2, 2, 3],
 };
const VintageSeries: IShipSeriesInfo = {
    seriesName: "Vintage Series",
    parts: [
        "Log Prow",
        "Swim Ring",
        "Vintage Hull",
        "Meager Cannon",
        "Worn Handrail",
        "Barrel Shack",
        "Strange Chimney",
        "Simple Wheel",
    ],
    bonus: [0, 0, 0, 1, 1, 1, 2, 2, 3],
};
const DemonSeries: IShipSeriesInfo = {
    seriesName: "Demon Series",
    parts: [
        "Demon Prow",
        "Sickle Anchor",
        "Demon Ship",
        "Fear Cannon",
        "Spike Handrail",
        "Demon Prison",
        "Demon Chimney",
        "Insect Wheel",
    ],
    bonus: [0, 0, 0, 1, 1, 1, 2, 2, 3],
};
const TropicalSeries: IShipSeriesInfo = {
    seriesName: "Tropical Series",
    parts: [
        "Tropical Prow",
        "Shell Anchor",
        "Tropical Ship",
        "Seapony Cannon",
        "Wood Handrail",
        "Shell Apartment",
        "Horn Chimney",
        "Shell Wheel",
    ],
    bonus: [0, 0, 0, 1, 1, 1, 2, 2, 3],
};
const DignifiedSeries: IShipSeriesInfo = {
    seriesName: "Dignified Series",
    parts: [
        "Tourist Prow",
        "Weighty Anchor",
        "Dignified Ship",
        "Red Cannon",
        "Utility Handrail",
        "Practical Bridge",
        "Tall Chimney",
        "Red Wheel",
    ],
    bonus: [0, 0, 0, 1, 1, 1, 2, 2, 3],
};
const GoldenSeries: IShipSeriesInfo = {
    seriesName: "Golden Series",
    parts: [
        "Golden Prow",
        "Gem Anchor",
        "Golden Hull",
        "Golden Cannon",
        "Golden Handrail",
        "Golden Bridge",
        "Golden Chimney",
        "Golden Wheel",
    ],
    bonus: [0, 0, 1, 2, 2, 2, 3, 3, 4],
};

export const AllSeries = [
    BrightSeries,
    IronSeries,
    StoneSeries,
    VintageSeries,
    DemonSeries,
    TropicalSeries,
    DignifiedSeries,
    GoldenSeries,
];
