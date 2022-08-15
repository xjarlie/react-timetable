import React from "react";
import global from "./global.js";

class Marker extends React.Component {

    getPos(hours, minutes, maxHeight) {
        
        const totHours = Math.round(((hours + (minutes / 60)) + Number.EPSILON) * 100) / 100

        const proportion = totHours / 24;
        const topPos = proportion * maxHeight;
        return topPos;

    }

    render() {

        const maxHeight = this.props.hourlyHeight * 24;
        const currentTime = new Date(global.get('time'));

        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();


        const pos = this.getPos(hours, minutes, maxHeight);

        return (
            <div className="marker" style={{top: pos}}>
                <span className="label">{`${hours}:${minutes}`}</span>
                <hr data-time={currentTime.toISOString()} />
            </div>
        )
    }

}

export default Marker;