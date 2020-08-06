import React, { Component } from "react";

let url = "https://vibing-api.herokuapp.com/home/inspirations"

const optionGET = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

class Inspirations extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  } //constructor
  componentWillMount() {
    fetch(url, optionGET)
      .then((res) => res.json())
      .then((data) => this.setState({ data }))
      .catch((err) => {
        console.log(err);
      });
  } //componentWillMount
  render() {
    let list = this.state.data.map((item) => {
      return (
        <div>
         <p></p>
        </div>
      ); //return
    });

    return <div className="players">{list}</div>;
  } //render
} //component

export default Inspirations;
