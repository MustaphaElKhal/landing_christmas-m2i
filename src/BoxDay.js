import React, { Component } from "react";

class BoxDay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <li className="list liBoxDay">
        {this.props.dayPast
        ? (
          <div className="box">
            <img className="imgDay rounded-circle opacity-1 border border-danger border-3" src={this.props.image.image}></img>
            <div className="bottom-right opacity-2">{this.props.day}</div>
          </div>
        ) : (
          <>
          {this.props.day == 3 | this.props.day == 11 | this.props.day == 15 || this.props.day == 22 ?
          (<div className="box">
            <img className="imgDay rounded-circle opacity-3 border border-success border-3" src={this.props.image.image}></img>
            <div className="bottom-right opacity-3">{this.props.day}</div>
          </div>)
          :
          (<>
        {this.props.currentDay ? (
            <div className="box">
            <i className="fas fa-star-of-life size-4 pb-5" id="snow"><p className="snowFlakes">Nouveau</p></i>
            <img className="imgDay rounded-circle" src={this.props.image.image}></img>
            <div className="bottom-right">{this.props.day}</div>
            </div>
        ) : (
            <div className="box">
            <img className="imgDay rounded-circle opacity-3" src={this.props.image.image}></img>
            <div className="bottom-right opacity-3">{this.props.day}</div>
            </div>
        )}
          </>)
          }
          </>
        )}
      </li>
    );
  }
}

export default BoxDay;
