import React, { Component } from "react";
import Header from "../Header/Header";

let url = "https://vibing-api.herokuapp.com/home/posts";

const optionGET = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }


class Vibe extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentWillMount() {
    fetch(url, optionGET)
    .then((res) => res.json())
    .then((data) => this.setState({ data }))
    .then(console.log(this.state.data))
    .catch((err) => {
        console.log(err);
    });
  }//componentWillMount
  render() {
    let display = this.state.data.map((item) => {
      if ( item._id=== this.props.match.params.id) {
        return (
          <React.Fragment>
            <Header />
        <div>{item.post}</div>
          </React.Fragment>
        );
      }
    }); //display
    return <div>{display}</div>
  } //render

} //Vibe

export default Vibe;
