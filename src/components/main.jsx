import React, { Component } from "react";
import Header from "./header";
import Sider from "./sider";
import Center from "./center";
import Form from "./form";
import Footer from "./footer";
import Test from "./images/test.jpeg";
import I1 from "./images/I1.jpg";
import I2 from "./images/I2.jpg";
import I3 from "./images/I3.jpg";
import U4 from "./images/U4.jpg";
import U5 from "./images/U5.jpg";
import U6 from "./images/U6.jpg";
import U7 from "./images/U7.jpg";
import U8 from "./images/U8.jpg";
import U9 from "./images/U9.jpg";
import U10 from "./images/U10.jpg";
import U11 from "./images/U11.jpg";
import U12 from "./images/U12.jpg";
import U13 from "./images/U13.jpg";
import U14 from "./images/U14.jpg";
import U15 from "./images/U15.jpg";
import U16 from "./images/U16.jpg";
import U17 from "./images/U17.jpg";
import U18 from "./images/U18.jpg";
import U19 from "./images/U19.jpg";
import U20 from "./images/U20.jpg";
import U21 from "./images/U21.jpg";
import U22 from "./images/U22.jpg";
import U23 from "./images/U23.jpg";
import U24 from "./images/U24.jpg";
import U25 from "./images/U25.jpg";

class Main extends Component {
  likedClassName = "bi bi-suit-heart";
  emptyLikeClassName = "bi bi-heart-fill";
  state = {
    addidtomovie: 26,

    movies: [
      {
        img: U25,
        id: 1,
        name: "big",
        genre: "comedy",
        rating: 5,
        like: "bi bi-suit-heart",
      },
      {
        img: I1,
        id: 2,
        name: "The Blues Brothers",
        genre: "comedy",
        rating: 5,
        like: "bi bi-suit-heart",
      },
      {
        img: I2,
        id: 3,
        name: "When Harry Met Sally...",
        genre: "comedy",
        rating: 5,
        like: "bi bi-suit-heart",
      },
      {
        img: I3,
        id: 4,
        name: "Monty Python and the Holy Grail",
        genre: "comedy",
        rating: 5,
        like: "bi bi-suit-heart",
      },
      {
        img: U4,
        id: 5,
        name: "Tommy Boy",
        genre: "comedy",
        rating: 5,
        like: "bi bi-suit-heart",
      },
      {
        img: U5,
        id: 6,
        name: "Fast and furious",
        genre: "action",
        rating: 5,
        like: "bi bi-suit-heart",
      },
      {
        img: U6,
        id: 7,
        name: "Fast and furious 2",
        genre: "action",
        rating: 5,
        like: "bi bi-suit-heart",
      },
      {
        img: U7,
        id: 8,
        name: "Fast and furious 3",
        genre: "action",
        rating: 5,
        like: "bi bi-suit-heart",
      },
      {
        img: U8,
        id: 9,
        name: "Fast and furious 4",
        genre: "action",
        rating: 5,
        like: "bi bi-suit-heart",
      },
      {
        img: U9,
        id: 10,
        name: "Fast and furious 5",
        genre: "action",
        rating: 5,
        like: "bi bi-suit-heart",
      },
      {
        img: U10,
        id: 11,
        name: "it",
        genre: "horor",
        rating: 5,
        like: "bi bi-suit-heart",
      },
      {
        img: U11,
        id: 12,
        name: " Bones and All",
        genre: "horor",
        rating: 5,
        like: "bi bi-suit-heart",
      },
      {
        img: U12,
        id: 13,
        name: "1911",
        genre: "horor",
        rating: 5,
        like: "bi bi-suit-heart",
      },
      {
        img: U13,
        id: 14,
        name: "the scream",
        genre: "horor",
        rating: 5,
        like: "bi bi-suit-heart",
      },
      {
        img: U14,
        id: 15,
        name: "Smile",
        genre: "horor",
        rating: 5,
        like: "bi bi-suit-heart",
      },
      {
        img: U15,
        id: 16,
        name: "annie",
        genre: "family",
        rating: 5,
        like: "bi bi-suit-heart",
      },
      {
        img: U16,
        id: 17,
        name: "Dr. Dolittle",
        genre: "family",
        rating: 5,
        like: "bi bi-suit-heart",
      },
      {
        img: U17,
        id: 18,
        name: "The Greatest Showman",
        genre: "family",
        rating: 5,
        like: "bi bi-suit-heart",
      },
      {
        img: U18,
        id: 19,
        name: "Moana",
        genre: "family",
        rating: 5,
        like: "bi bi-suit-heart",
      },
      {
        img: U19,
        id: 20,
        name: "The Lego Movie",
        genre: "family",
        rating: 5,
        like: "bi bi-suit-heart",
      },
      {
        img: U20,
        id: 21,
        name: "cars",
        genre: "kids",
        rating: 5,
        like: "bi bi-suit-heart",
      },
      {
        img: U21,
        id: 22,
        name: "Turning Red",
        genre: "kids",
        rating: 5,
        like: "bi bi-suit-heart",
      },
      {
        img: U22,
        id: 23,
        name: "The Sea Beast ",
        genre: "kids",
        rating: 5,
        like: "bi bi-suit-heart",
      },
      {
        img: U23,
        id: 24,
        name: "Encanto ",
        genre: "kids",
        rating: 5,
        like: "bi bi-suit-heart",
      },
      {
        img: U24,
        id: 25,
        name: "Sonic the Hedgehog",
        genre: "kids",
        rating: 5,
        like: "bi bi-suit-heart",
      },
    ],
    newMovies: [],
    activepage: 1,
    pageVied: 10,
  };
  styleA = {
    width: "100%",
    height: "98vh",
  };
  style = {};

  constructor() {
    super();
    this.state.newMovies = this.state.movies;
  }

  render() {
    return (
      <div style={this.styleA}>
        <Header defPage={this.byGenre} devid={this.devid} />
        <Sider
          handleFunc={this.byGenre}
          auto={this.state.movies}
          camot={this.amComedy()}
          camot1={this.amAction()}
          camot2={this.amHoror()}
          camot3={this.amFamily()}
          camot4={this.amKids()}
        />
        <Center
          list={this.state.newMovies}
          auto={this.state.movies}
          deleteFunc={this.delMovie}
          like={this.likeFunc}
          activ={this.state.activepage}
          veiled={this.state.pageVied}
          push={this.pushMovie}
        />
        <Footer
          activ={this.state.activepage}
          vied={this.state.pageVied}
          activeChange={this.activeChange}
          mymovies={this.state.newMovies}
        />
      </div>
    );
  }

  pushMovie = (event, values) => {
    event.preventDefault();
    this.state.movies.push({ id: this.state.addidtomovie, ...values });
    this.state.addidtomovie++;
    this.setState({
      movie: this.state.movies,
      addidtomovie: this.state.addidtomovie,
    });
    alert("new movie added");
  };

  activeChange = (n) => {
    console.log(n);
    this.setState({ activepage: n });
  };
  devid = (ev) => {
    if (ev.key == "Enter" && ev.target.value > 0) {
      this.setState({ pageVied: ev.target.value });
    }
  };

  amComedy() {
    const badge = this.state.movies.filter((m) => m.genre == "comedy");
    console.log(badge.length);
    return badge.length;
  }
  amAction() {
    const badge = this.state.movies.filter((m) => m.genre == "action");
    console.log(badge.length);
    return badge.length;
  }
  amHoror() {
    const badge = this.state.movies.filter((m) => m.genre == "horor");
    return badge.length;
  }
  amFamily() {
    const badge = this.state.movies.filter((m) => m.genre == "family");
    return badge.length;
  }
  amKids() {
    const badge = this.state.movies.filter((m) => m.genre == "kids");
    return badge.length;
  }

  likeFunc = (mov) => {
    console.log("hi");
    const movie = this.state.newMovies.find((movie) => movie.id == mov);
    movie.like =
      movie.like == this.likedClassName
        ? this.emptyLikeClassName
        : this.likedClassName;

    this.setState({
      movies: this.state.movies,
      newMovies: this.state.newMovies,
    });
  };

  delMovie = (id) => {
    // const movie = this.state.movies.filter((id) => this.state.movies.id !== id);
    // const movie2 = this.state.newMovies.filter((id) => this.newMovies.id !==id)
    // this.state.movies = movie;
    // this.state.newMovies=
    // this.setState({ movies: movie });
    // const movie2 = this.state.newMovies.splice(index, 1);
    // this.setState({ movie: movie });
    // this.setState({ movie: movie2 });
    // console.log(this.state.movies);
    // console.log(this.state.newMovies);
    this.setState({
      movies: this.state.movies.filter((x) => x.id !== id),
      newMovies: this.state.newMovies.filter((x) => x.id !== id),
    });
    // const updatedList = this.state.movies.filter((x) => x.id !== id);
    // const updatedNewList = this.state.newMovies.filter((x) => x.id !== id);
    // this.setState({ movies: updatedList, newMovies: updatedNewList });
  };

  byGenre = (val) => {
    switch (val) {
      case "all":
        this.setState({ newMovies: [...this.state.movies] });
        // console.log("picked a all movie");
        // let newMovies0 = this.state.movies;
        // this.setState({ newMovies: newMovies0 });
        // console.log(this.state.movies);
        // console.log(this.state.newMovies);
        break;
      case "comedy":
        // this.setState({ newMovies: [] });
        console.log("picked a comedy movie");
        const newMovies = this.state.movies.filter(
          (ob) => ob.genre == "comedy"
        );
        this.state.newMovies = newMovies;
        this.setState({ newMovies: newMovies });
        console.log(this.state.movies);
        console.log(this.state.newMovies);
        break;
      case "action":
        this.setState({ newMovies: [] });
        console.log("picked a action movie");
        let newMovies1 = this.state.movies.filter((ob) => ob.genre == "action");
        this.setState({ newMovies: newMovies1 });
        console.log(this.state.movies);
        console.log(this.state.newMovies);
        break;
      case "horor":
        let newMovies3 = this.state.movies.filter((ob) => ob.genre == "horor");
        this.setState({ newMovies: newMovies3 });
        break;
      case "family":
        let newMovies4 = this.state.movies.filter((ob) => ob.genre == "family");
        this.setState({ newMovies: newMovies4 });
        break;
      case "kids":
        let newMovies5 = this.state.movies.filter((ob) => ob.genre == "kids");
        this.setState({ newMovies: newMovies5 });
        break;
      default:
        break;
    }
  };
}

export default Main;
