import React, { Component } from "react";
import Movies from "./movies";
import Form from "./form";
import { Route, Routes } from "react-router-dom";

class Center extends Component {
  state = {};
  // styleA = {
  //   position: "fixed",
  //   top: "12vh",
  //   left: "39vh",
  //   display: "grid",
  //   gridTemplateRows: " 10% 80% 10%",
  //   gridTemplateColumns: "1/8fr 6/8fr 1/8fr",
  //   backgroundColor: "black",
  //   color: "white",
  //   fontSize: "x-large",
  //   border: "9px solid grey",
  //   width: "70vw",
  //   height: "85vh",
  //   overflowY: "auto",
  //   scrollbarWidth: "none",
  //   boxShadow: "0px 0px 15px 7px black",
  // };

  render() {
    return (
      <React.Fragment>
        <Routes>
          <Route
            path="/"
            element={
              <Movies
                list={this.props.list}
                auto={this.props.auto}
                deleteFunc={this.props.deleteFunc}
                like={this.props.like}
                activ={this.props.activ}
                veiled={this.props.veiled}
              />
            }
          />

          <Route
            path="/addMovie"
            element={<Form auto={this.props.auto} push={this.props.push} />}
          />
        </Routes>
      </React.Fragment>
    );
  }
}

export default Center;
