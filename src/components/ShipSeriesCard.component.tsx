import * as React from "react";
import { IShipSeriesInfo } from "../ShipSeriesList";

export interface IShipSeriesCardProps {
    series: IShipSeriesInfo;
}

interface IShipSeriesCardState {
    partCount: number;
}

export const ShipSeriesCard: React.FunctionComponent<IShipSeriesCardProps> = (props: IShipSeriesCardProps) => {
    const [partCount, setPartCount] = React.useState(0);

    const handleChange = (event: {target: {checked: boolean, name: string}}) => {
        const newValue = event.target.checked ? partCount + 1 : partCount - 1;

        setPartCount(newValue);
    };

    function renderBonus() {
        const bonus = props.series.bonus[partCount];

        if (bonus === 0) {
            return "No Bonus";
        } else if (bonus === 1) {
            return "+1 Heart";
        } else {
            return `+${bonus} Hearts`;
        }
    }

    function renderParts(parts: string[]) {
        return parts.map((part) => {
            const className = part.replace(" ", "-");
            return (
                <label className={`ship-part ship-part-${className}`} key={`ship-part-${className}`}>
                    <input
                        className={`input-ship-part-${className}`}
                        name={`have-${className}`}
                        type="checkbox"
                        onChange={handleChange}
                    />
                    {`  ${part}`}
                </label>
            );
        });
    }

    return (
        <div className="ship-series-card">
            <div className="title">
                {props.series.seriesName}
            </div>
            <form className="ship-parts">
                {renderParts(props.series.parts)}
            </form>
            <div className="ship-bonus">
                {renderBonus()}
            </div>
        </div>
    );
};

ShipSeriesCard.displayName = "ShipSeriesCard";
