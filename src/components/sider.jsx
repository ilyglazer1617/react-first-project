import React, { Component } from "react";
class Sider extends Component {
  state = {};

  styleA = {
    position: "fixed",
    top: "10vh",
    display: "grid",
    gridTemplateRows: "5% 15% 5% 15% 5% 15% 5% 15% 5% 15% ",
    gridTemplateColumns: "1",
    backgroundColor: "#230833",
    opacity: 0.95,
    color: "bisque",
    fontSize: "x-large",
    width: "10vw",
    height: "94vh",
    justifyContent: "center",
  };
  styleB = {
    gridRowStart: "2",
    gridRowEnd: "3",
  };

  styleC = {
    gridRowStart: "4",
    gridRowEnd: "5",
  };
  styleD = {
    gridRowStart: "6",
    gridRowEnd: "7",
  };
  styleE = {
    gridRowStart: "8",
    gridRowEnd: "9",
  };
  styleF = {
    gridRowStart: "10",
    gridRowEnd: "11",
  };
  render() {
    return (
      <div style={this.styleA}>
        <div style={this.styleB}>
          <button
            className="btn btn-info position-relative"
            onClick={() => this.props.handleFunc("comedy")}
          >
            comedy
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
              {" "}
              {this.props.camot}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </div>
        <div style={this.styleC}>
          <button
            className="btn btn-info position-relative "
            onClick={() => this.props.handleFunc("action")}
          >
            action
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
              {" "}
              {this.props.camot1}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </div>

        <div style={this.styleD}>
          <button
            className="btn btn-info position-relative"
            onClick={() => this.props.handleFunc("horor")}
          >
            horor
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success ">
              {" "}
              {this.props.camot2}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </div>

        <div style={this.styleE}>
          <button
            className="btn btn-info position-relative"
            onClick={() => this.props.handleFunc("family")}
          >
            family
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success ">
              {" "}
              {this.props.camot3}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </div>
        <div style={this.styleF}>
          <button
            className="btn btn-info position-relative"
            onClick={() => this.props.handleFunc("kids")}
          >
            kids
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
              {" "}
              {this.props.camot4}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </div>
      </div>
    );
  }
}
export default Sider;
