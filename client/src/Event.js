import React from "react";
import global from "./global";

class Event extends React.Component {

    getPos(time, maxHeight) {
        const hours = parseInt(time.slice(0, 2));
        const minutes = parseInt(time.slice(2));
        
        const totHours = Math.round(((hours + (minutes / 60)) + Number.EPSILON) * 100) / 100

        const proportion = totHours / 24;
        const topPos = proportion * maxHeight;
        return topPos;

    }

    render() {
        const maxHeight = this.props.maxHeight;
        const startTime = this.props.data.startTime;
        const endTime = this.props.data.endTime;

        //const offsetHours = this.getPos('0100', maxHeight*2) * 6;
        const offsetHours = 0;

        const startPos = this.getPos(startTime, maxHeight);

        const endPos = this.getPos(endTime, maxHeight);

        const height = endPos - startPos;

        let color = 'aqua';
        const currentTimeDate = new Date(global.get('time'));
        const currentStringTime = `${currentTimeDate.getHours()}${currentTimeDate.getMinutes()}`;
        if (parseInt(currentStringTime) >= parseInt(startTime) && parseInt(currentStringTime) < parseInt(endTime)) {
            color = 'aquamarine';
        }
        

        return (
            <div className="event" id={this.props.id} style={{ position: 'absolute', top: startPos-offsetHours, height: height + 'px', backgroundColor: color }}>
                <span className="name">{this.props.data.name}</span>
                <span className="times">({this.props.data.startTime} - {this.props.data.endTime})</span>
            </div>
        )
    }

}

export default Event;