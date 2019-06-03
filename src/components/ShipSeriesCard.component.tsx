import * as React from "react";
import { IShipSeriesInfo } from "../ShipSeriesList";

export interface IShipSeriesCardProps {
    series: IShipSeriesInfo;
}

interface IShipSeriesCardState {
    partCount: number;
}

export class ShipSeriesCard extends React.Component<IShipSeriesCardProps, IShipSeriesCardState> {

    public constructor(props: any) {
        super(props);

        this.state = {
            partCount: 0,
        };
    }

    public render() {
        return (
            <div className="ship-series-card col-sm-12 col-md-6 col-lg-3">
                <div className="title">
                    {this.props.series.seriesName}
                </div>
                <form className="ship-parts">
                    {this.renderParts(this.props.series.parts)}
                </form>
                <div className="ship-bonus">
                    {this.renderBonus()}
                </div>
            </div>
        );
    }

    private handleChange = (event: {target: {checked: boolean, name: string}}) => {
        const count = this.state.partCount;
        const newValue = event.target.checked ? count + 1 : count - 1;

        this.setState({partCount: newValue});
    }

    private renderBonus() {
        const bonus = this.props.series.bonus[this.state.partCount];

        if (bonus === 0) {
            return "No Bonus";
        } else if (bonus === 1) {
            return "+1 Heart";
        } else {
            return `+${bonus} Hearts`;
        }
    }

    private renderParts(parts: string[]) {
        return parts.map((part) => {
            const className = part.replace(" ", "-");
            return (
                <label className={`ship-part ship-part-${className}`} key={`ship-part-${className}`}>
                    <input
                        className={`input-ship-part-${className}`}
                        name={`have-${className}`}
                        type="checkbox"
                        onChange={this.handleChange}
                    />
                    {`  ${part}`}
                </label>
            );
        });
    }
}
