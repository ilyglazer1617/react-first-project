import React, { Component } from "react";
import Pagination from "react-bootstrap/Pagination";
// import { Pagination } from "react-bootstrap/pagination";
class Footer extends Component {
  state = {};
  styleA = {
    position: "fixed",
    display: "grid",
    gridTemplateRows: "1",
    gridTemplateColumns: "1/3fr 1/3fr 1/3fr",
    backgroundColor: "#b2c2bf",
    color: "rgb(27, 241, 241)",
    fontSize: "xx-large",
    width: "100%",
    height: "10vh",
    top: "90vh",
    justifyContent: "center",
  };
  styleB = {
    position: "fixed",
    width: "10vw",
    height: "10vh",
    top: "90vh",
    left: "46vw",
    color: "black",
    justifyContent: "center",
  };

  render() {
    const { active, vied, mymovies, activeChange } = this.props;
    let items = [];
    console.log(activeChange);
    for (
      let number = 1;
      number <= Math.ceil(mymovies.length / vied);
      number++
    ) {
      items.push(
        <Pagination.Item key={number} onClick={() => activeChange(number)}>
          {number}
        </Pagination.Item>
      );
    }
    console.log(items);
    // const paginationBasice = (
    return <Pagination style={this.styleB}>{items}</Pagination>;
    // );
  }
}

export default Footer;
