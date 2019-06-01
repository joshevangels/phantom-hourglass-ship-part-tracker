import * as React from "react";
import { IShipSeriesInfo } from "../ShipSeriesList";

export interface IShipSeriesCardProps {
    series: IShipSeriesInfo;
}

export class ShipSeriesCard extends React.Component<IShipSeriesCardProps> {
    public render() {
        return (
            <div className="ship-series-card">
                <div className="title">
                    {this.props.series.seriesName}
                </div>
                <div className="ship-parts">
                    {this.renderParts(this.props.series.parts)}
                </div>
            </div>
        );
    }

    private renderParts(parts: string[]) {
        return parts.map((part) => {
            return (<div className="ship-part" key={`ship-part-${part}`}>
                {part}
            </div>);
        });
    }
}
