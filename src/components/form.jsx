import { useFormik } from "formik";
import { Link } from "react-router-dom";
import React from "react";

function Form(props) {
  const { auto } = props;
  const formik = useFormik({
    initialValues: {
      name: "",
      genre: "",
      rating: "",
      like: "bi bi-suit-heart",
    },
  });
  const styleA = {
    position: "fixed",
    justifyContent: "center",
    border: "2px solid tomato",
    backgroundColor: "black",
    color: "aqua",
    alignItems: "center",
    width: "35vw",
    top: "35vh",
    left: "32vw",
  };
  const styleB = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "whitesmoke",
    width: "33vw",
  };
  const styleD = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    width: "20vw",
    marginLeft: "6.5vw",
  };
  const styleC = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    width: "10vw",
    marginLeft: "11.5vw",
  };
  const styleH = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    width: "5vw",
    marginLeft: "14vw",
  };
  const styleI = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    width: "100vw",
    height: "100vh",
  };
  const styleG = {
    textDecoration: "none",
  };
  console.table(formik.values);
  return (
    <React.Fragment>
      <div style={styleI}>
        <div style={styleA}>
          <form onSubmit={(event) => props.push(event, formik.values)}>
            <div>
              <div>
                <Link style={styleG} to="/">
                  <p> ❌</p>
                </Link>
              </div>
              <label style={styleB} htmlFor="">
                movie name:
              </label>
              <input
                style={styleD}
                className="form-control"
                type="text"
                name="name"
                id=""
                required
                // value={formik.values.name}
                onChange={formik.handleChange}
              />
            </div>
            <div>
              <label style={styleB} htmlFor="">
                genre:
              </label>
              <input
                style={styleD}
                className="form-control"
                type="text"
                name="genre"
                id=""
                required
                // value={formik.values.genre}
                onChange={formik.handleChange}
              />
            </div>
            <div>
              <label style={styleB} htmlFor="">
                rating:
              </label>
              <input
                style={styleH}
                className="form-control"
                type="number"
                name="rating"
                id=""
                autoFocus
                required
                // value={formik.values.rating}
                onChange={formik.handleChange}
              />
            </div>
            {/* <div>
              <label style={styleB} htmlFor="">
                add photo:
              </label>
              <input
                style={styleD}
                className="form-control"
                type="text"
                name="img"
                id=""
                required
                // value={formik.values.genre}
                onChange={formik.handleChange}
              />
            </div> */}
            <div>
              <button
                style={styleC}
                type="submit"
                // onClick={(event) => props.push(event, formik.values)}
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Form;
