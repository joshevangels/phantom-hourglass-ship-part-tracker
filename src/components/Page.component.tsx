import * as React from 'react';
import { ShipCard } from './ShipCard.component';

export class Page extends React.Component {
    public render() {
        return <div className="page">
            <header className="header">
                <h2>
                    Phantom Hourglass Ship Part Tracker
                </h2>
            </header>
            <div className="ship-cards">
                {this.renderShipCards()}
            </div>
        </div>;
    }

    private renderShipCards() {
        return <div className="ship-cards">
            <ShipCard/>
            <ShipCard/>
            <ShipCard/>
            <ShipCard/>
            <ShipCard/>
        </div>
    }
}
