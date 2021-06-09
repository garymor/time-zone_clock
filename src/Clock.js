import React, { Component } from "react";
import ReactDOM from "react-dom";
import { FormatedDate } from "./FormatedDate";
import TimeZone from "./TimeZone"


import "./static/styles.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      TZ:"Africa/Cairo"
    };
  this.handleTimeZoneChange = this.handleTimeZoneChange.bind(this)
  
  }

  handleTimeZoneChange(newTZ){
      this.setState({TZ:newTZ})
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    console.log("unmounted");
  }

  tick() {
    let d = new Date()
    
    this.setState({ date: d });
  }

  render() {
    return (
     <>
          <div className="tick">
            <h2> T I M E  _   Z O N E  _ C L O_cK </h2>
          </div>
        {/* <FormatedDate date={this.state.date} /> */}
          <div className="tock">
          <h2>{this.state.date.toLocaleString('en-US', { timeZone: this.state.TZ })}</h2>
        </div>
        <TimeZone  onTimeZoneChange = {this.handleTimeZoneChange}/>
      </>
    );
  }
}

export default Clock;
