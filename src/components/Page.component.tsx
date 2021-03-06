import * as React from "react";
import {AllSeries, IShipSeriesInfo} from "../ShipSeriesList";
import { ShipSeriesCard } from "./ShipSeriesCard.component";

const spreadsheetLink = "https://docs.google.com/"
+ "spreadsheets/d/1VoeIV9eRJQIH09M5XZ-fRRq7WhfdgCxWEsEI9CiMHuA/edit#gid=1032763275";

export const Page: React.FunctionComponent = () => {
    return (
        <div className="page">
            <header>
                <h2>
                    Phantom Hourglass Ship Part Tracker
                </h2>
                <p>
                    inspired by {/* needed to add space to the left */}
                    <a className="outer-link" href={spreadsheetLink} target="_blank">
                            chuggaaconroy's ship part spreadsheet
                    </a>
                </p>
                <p>
                    <a className="outer-link" href="https://www.youtube.com/user/chuggaaconroy" target="_blank">
                        chuggaaconroy's channel
                    </a>
                </p>
            </header>
            <main>
                <div className="ship-series-cards">
                    {renderShipCards()}
                </div>
            </main>
        </div>
    );

    function renderShipCards() {
        return AllSeries.map( (series: IShipSeriesInfo) => {
            return <ShipSeriesCard key={`ship-series-${series.seriesName}`} series={series}/>;
        });
    }
};
