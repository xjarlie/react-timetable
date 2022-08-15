import React from "react";
import Timetable from "./Timetable"
import "./app.css";

class App extends React.Component {

    render() {
        return (
            <div className="app">
                <Timetable />
            </div>
        )
    }

}

export default App;