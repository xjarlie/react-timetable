import React from "react";
import Week from "./Week";

class Timetable extends React.Component {

    constructor() {
        super();

        this.state = {
            data: {}
        }
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:5000/timetable');
        const status = response.status;
        const json = await response.json();

        console.log(status, json);
        this.setState({data: json});
    }

    render() {
        return (
            <div className="timetable">
                <h2>Timetable</h2>
                <Week data={this.state.data} />
            </div>
        )
    }

}

export default Timetable