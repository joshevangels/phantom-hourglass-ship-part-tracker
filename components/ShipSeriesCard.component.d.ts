import * as React from "react";
import { IShipSeriesInfo } from "../ShipSeriesList";
export interface IShipSeriesCardProps {
    series: IShipSeriesInfo;
}
interface IShipSeriesCardState {
    partCount: number;
}
export declare class ShipSeriesCard extends React.Component<IShipSeriesCardProps, IShipSeriesCardState> {
    constructor(props: any);
    render(): JSX.Element;
    private handleChange;
    private renderBonus;
    private renderParts;
}
export {};
