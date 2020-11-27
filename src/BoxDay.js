import React, { Component } from "react";
import { Modal, Button } from "antd";
import { notification } from "antd";

import "antd/dist/antd.css";
import { Quizz } from "./Data/Data";

class BoxDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      options: [],
      visible: false,
      alreadyAnswered: false
    };
  }

  componentDidMount() {
    let tmpData = Quizz.find((q) => q.id == this.props.day);
    this.setState({ question: tmpData.question, options: tmpData.options });
  }


  viewQuestion = () => {
    if (!this.state.alreadyAnswered) {
      this.setState({
        visible: true,
      });
    } else {
      notification.open({
        message: "Already Answered",
        description: "Vous avez deja repondu",
        onClick: () => {
          console.log("Notification Clicked!");
        },
        placement: "bottomRight",
        duration: 2,
      });
    }
  }

  handleOk = () => {
    this.setState({
      visible: false,
      alreadyAnswered: true
    });
  };

  render() {
    return (
      <li className="list liBoxDay">
        {this.props.dayPast ? (
          <div className="box">
            <img
              className="imgDay rounded-circle opacity-1 border border-danger border-3"
              src={this.props.image.image}
            ></img>
            <div className="bottom-right opacity-2">{this.props.day}</div>
          </div>
        ) : (
          <>
            {(this.props.day == 3) |
              (this.props.day == 11) |
              (this.props.day == 15) || this.props.day == 22 ? (
              <div className="box">
                <img
                  className="imgDay rounded-circle opacity-3 border border-success border-3"
                  src={this.props.image.image}
                ></img>
                <div className="bottom-right opacity-3">{this.props.day}</div>
              </div>
            ) : (
              <>
                {this.props.currentDay ? (
                  <div className="box">
                    <Modal
                      title={this.state.question}
                      visible={this.state.visible}
                      onOk={this.handleOk}
                      footer={[
                        <Button
                          key="submit"
                          type="primary"
                          onClick={this.handleOk}
                        >
                          OK
                        </Button>,
                      ]}
                    >
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option1"
                        />
                        <label
                          className="form-check-label"
                          for="exampleRadios1"
                        >
                          {this.state.options[0]}
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios2"
                          value="option2"
                        />
                        <label
                          className="form-check-label"
                          for="exampleRadios2"
                        >
                         {this.state.options[1]}
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios3"
                          value="option3"
                        />
                        <label
                          className="form-check-label"
                          for="exampleRadios3"
                        >
                          {this.state.options[2]}
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="option4"
                        />
                        <label
                          className="form-check-label"
                          for="exampleRadios4"
                        >
                          {this.state.options[3]}
                        </label>
                      </div>
                    </Modal>
                    <i className="fas fa-star-of-life size-4 pb-5" id="snow">
                      <p className="snowFlakes">Nouveau</p>
                    </i>
                    <img
                      className="imgDay rounded-circle"
                      src={this.props.image.image}
                      onMouseOver={()=> this.viewQuestion()}
                    ></img>
                    <div className="bottom-right">{this.props.day}</div>
                  </div>
                ) : (
                  <div className="box">
                    <img
                      className="imgDay rounded-circle opacity-3"
                      src={this.props.image.image}
                    ></img>
                    <div className="bottom-right opacity-3">
                      {this.props.day}
                    </div>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </li>
    );
  }
}

export default BoxDay;
