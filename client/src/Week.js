import React from "react";
import Day from "./Day";
import Marker from "./Marker";
import global from "./global.js";

class Week extends React.Component {

    constructor() {
        super();

        this.state ={
            hourlyHeight: 65
        }

        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        
        this.ticker = setInterval(this.tick, 1000);
        
    }

    componentWillUnmount() {
        clearInterval(this.ticker)
    }

    tick() {
        global.set('time', Date.now());
    }

    render() {

        const hourlyHeight = 65;
        return (
            <div className="week">
                {Object.entries(this.props.data).map(([key, value]) => {
                    return <Day key={key} dayName={key} data={value} hourlyHeight={hourlyHeight} height={this.state.hourlyHeight * 24} />
                })}
                <Marker hourlyHeight={this.state.hourlyHeight} />

            </div>
        )
    }
}

export default Week;