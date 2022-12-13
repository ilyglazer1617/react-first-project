import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  state = {};
  styleA = {
    position: "fixed",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column-reverse",
    backgroundColor: "#b2c2bf",
    color: "rgb(27, 241, 241)",
    fontSize: "xx-large",
    width: "100vw",
    height: "10vh",
    top: "0vh",
    textDecoration: "none",
  };
  styleB = {
    gridColumnStart: "0",
    gridColumnEnd: "1",
    width: "fit-content",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "10px",
    textDecoration: "none",
  };
  styleC = {
    gridColumnStart: "1",
    gridColumnEnd: "2",
    marginTop: "3%",
    // fontSize: "small",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: "10px",
    color: "#fff",
    // padding: "15px 25px",
    backgroundColor: "#38D2D2",
    backgroundImage:
      "radial-gradient(93% 87% at 87% 89%, rgba(0, 0, 0, 0.23) 0%, transparent 86.18%), radial-gradient(66% 66% at 26% 20%, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%)",
    boxShadow:
      "inset -3px -3px 9px rgba(255, 255, 255, 0.25), inset 0px 3px 9px rgba(255, 255, 255, 0.3), inset 0px 1px 1px rgba(255, 255, 255, 0.6), inset 0px -8px 36px rgba(0, 0, 0, 0.3), inset 0px 1px 5px rgba(255, 255, 255, 0.6), 2px 19px 31px rgba(0, 0, 0, 0.2)",
    borderRadius: "14px",
    fontWeight: "bold",
    fontSize: "16px",
    border: "0",
    userSelect: "none",
    WebkitUserSelect: "none",
    touchAction: "manipulation",
    cursor: "pointer",
  };
  styleD = {
    gridColumnStart: "2",
    gridColumnEnd: "3",
    marginTop: "3%",
    fontSize: "small",
    marginRight: "0",
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  styleH = {
    backgroundColor: "rgb(27, 241, 241)",
    width: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "double",
  };
  styleI = {
    width: "50%",
  };
  styleBAdd = {
    color: "black",
    padding: "15px 25px",
    backgroundColor: "#B026FF ",
    backgroundImage:
      "radial-gradient(93% 87% at 87% 89%, rgba(0, 0, 0, 0.23) 0%, transparent 86.18%), radial-gradient(66% 66% at 26% 20%, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%)",
    boxShadow:
      "inset -3px -3px 9px rgba(255, 255, 255, 0.25), inset 0px 3px 9px rgba(255, 255, 255, 0.3), inset 0px 1px 1px rgba(255, 255, 255, 0.6), inset 0px -8px 36px rgba(0, 0, 0, 0.3), inset 0px 1px 5px rgba(255, 255, 255, 0.6), 2px 19px 31px rgba(0, 0, 0, 0.2)",
    borderRadius: "14px",
    fontWeight: "bold",
    fontSize: "16px",
    border: "0",
    userSelect: "none",
    WebkitUserSelect: "none",
    touchAction: "manipulation",
    cursor: "pointer",
  };

  render() {
    return (
      <React.Fragment>
        <div style={this.styleA}>
          <Link style={this.styleB} to="/">
            {" "}
            <h1 onClick={() => this.props.defPage("all")} style={this.styleB}>
              movily 🎬
            </h1>{" "}
          </Link>

          <div style={this.styleC}>
            <Link to="/addMovie">
              <button style={this.styleBAdd}>add movie</button>
            </Link>
          </div>
          <div style={this.styleD}>
            <div style={this.styleH}>
              <label>number of movies</label>
              <input
                type="number"
                style={this.styleI}
                onKeyPress={(ev) => this.props.devid(ev)}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
