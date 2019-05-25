import * as ReactDOM from 'react-dom';
import * as React from 'react';
import './css/main.scss'

const renderRootApp = () => {
    ReactDOM.render(React.createElement("h2", null, "Phantom Hourglass Ship Part Tracker"),
                document.getElementById("root"));
}

renderRootApp();
