import React from "react";
import Event from "./Event";

class Day extends React.Component {

    constructor() {
        super();

        this.state = {
            height: 0
        }

    }

    componentDidMount() {

        this.setState({height: this.props.height});
        
    }

    render() {
        return (
            <div className="day" id={this.props.dayName} style={{ height: this.state.height * 2 }}>
                <span onClick={this.changeHeight}>{this.props.dayName}</span>
                {Object.entries(this.props.data).map(([key, value]) => {
                    return <Event key={key} id={key} data={value} maxHeight={this.state.height} currentTime={this.state.currentTime} />
                })}
            </div>
        )
    }
}

export default Day;