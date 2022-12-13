import React, { Component } from "react";
class Movies extends Component {
  state = {};
  styleA = {
    position: "fixed",
    top: "13vh",
    left: "39vh",
    display: "grid",
    gridTemplateRows: " 10% 80% 10%",
    gridTemplateColumns: "1/8fr 6/8fr 1/8fr",
    backgroundColor: "black",
    color: "white",
    fontSize: "x-large",
    border: "9px solid rgb(27, 241, 241)",
    width: "70vw",
    height: "75vh",
    overflowY: "auto",
    scrollbarWidth: "none",
    boxShadow: "0px 0px 15px 7px black",
  };

  styleB = {
    backgroundColor: "initial",
    backgroundImage: "linear-gradient(-180deg, #FF7E31, #E62C03)",
    borderRadius: "6px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0 2px 4px",
    color: "#FFFFFF",
    cursor: "pointer",
    display: "inline-block",
    fontFamily:
      'Inter,-apple-system,system-ui,Roboto,"Helvetica Neue",Arial,sans-serif',
    height: "40px",
    lineHeight: "40px",
    outline: "0",
    overflow: "hidden",
    padding: "0 20px",
    pointerEvents: "auto",
    position: "relative",
    textAlign: "center",
    touchAction: "manipulation",
    userSelect: "none",
    WebkitUserSelect: "none",
    verticalAlign: "top",
    whiteSpace: "nowrap",
    width: "10vw",
    zIndex: 9,
    border: "0",
    transition: "box-shadow .2s",
  };
  styleC = {
    width: "5vw",
  };
  styleD = {
    display: "flex",
    justifyContent: "center",
  };
  styleE = {
    height: "3vh",
  };

  render() {
    // const showAll = this.props.list.length === 0;
    // const listToRender = showAll ? this.props.auto : this.props.list;

    let arrVel = [...this.props.list];

    const amountOfPage = this.props.veiled;
    console.log(this.props.activ);
    arrVel = arrVel.slice(
      amountOfPage * (this.props.activ - 1),
      amountOfPage * this.props.activ
    );

    return (
      <React.Fragment>
        <div style={this.styleA}>
          <table className="table table-dark table-borderless">
            <thead>
              <tr>
                <th> </th>
                <th>id</th>
                <th>name</th>
                <th>genre</th>
                <th>rating</th>
                <th> like</th>
                <th> delete</th>
              </tr>
            </thead>
            <tbody key={"1"}>
              {arrVel.map((movie, index) => (
                <tr key={index}>
                  <td style={this.style}>
                    <img style={this.styleC} src={movie.img} alt="" />
                  </td>
                  <td>{movie.id}</td>
                  <td>{movie.name}</td>
                  <td>{movie.genre}</td>
                  <td>{movie.rating}</td>
                  <td>
                    {" "}
                    <i
                      className={movie.like}
                      onClick={() => this.props.like(movie.id)}
                    >
                      <div className="red-bg"></div>
                    </i>
                  </td>
                  <td>
                    <button
                      style={this.styleB}
                      onClick={() => this.props.deleteFunc(movie.id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
