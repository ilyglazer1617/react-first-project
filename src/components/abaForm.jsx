import React, { Component } from "react";
import Form from "./form";
class AbaForm extends Component {
  state = {
    obj: {
      firstname: "",
    },
  };
  render() {
    return (
      <div>
        <Form onsubmit={this.onsubmit}></Form>
      </div>
    );
  }
  onsubmit = (values) => {
    alert(values.firstname);
  };
}

export default AbaForm;
