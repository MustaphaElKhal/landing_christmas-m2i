import React, { Component } from "react";

class BoxDay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <li className="list liBoxDay">
        {this.props.day == 3 | this.props.day == 11 | this.props.day == 15 || this.props.day == 22 ? (
          <>
            <img className="imgDay rounded-circle border border-success border-3" src={this.props.image}></img>
            <div className="bottom-right">{this.props.day}</div>
          </>
        ) : (
          <>
            <img className="imgDay rounded-circle" src={this.props.image}></img>
            <div className="bottom-right">{this.props.day}</div>
          </>
        )}
      </li>
    );
  }
}

export default BoxDay;
