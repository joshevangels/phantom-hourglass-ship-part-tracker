import * as React from "react";
import {AllSeries, IShipSeriesInfo} from "../ShipSeriesList";
import { ShipSeriesCard } from "./ShipSeriesCard.component";

export class Page extends React.Component {
    public render() {
        return (
            <div className="page">
                <header>
                    <h2>
                        Phantom Hourglass Ship Part Tracker
                    </h2>
                </header>
                <main>
                    <div className="ship-series-cards">
                        {this.renderShipCards()}
                    </div>
                </main>
            </div>
        );
    }

    private renderShipCards() {
        return AllSeries.map( (series: IShipSeriesInfo) => {
            return <ShipSeriesCard key={`ship-series-${series.seriesName}`} series={series}/>;
        });
    }
}
