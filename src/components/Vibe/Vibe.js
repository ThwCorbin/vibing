import React, { Component } from "react";
import Header from "../Header/Header";

let url = "https://vibing-api.herokuapp.com/home/posts";

const optionGET = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }

  const optionDELETE = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }


class Vibe extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      id: "",
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
            <form onSubmit={this.update}>
                <input 
                type= "text"
                placeholder="Update Vibe"
                ></input>
                <input type="submit">
                </input>
            </form>
        <div>{item.post}</div>
        <button onClick ={()=> {this.remove(item._id)}}>Delete</button>
          </React.Fragment>
        );
    } else {
        return null
    }
}); //display
return <div>{display}</div>
} //render

update = (e) => {
    e.preventDefault();
    console.dir(e.target[0].value);
    console.log(this.props.match.params.name);
    console.log(url + "/name/" + this.props.match.params.name);
    const formData = {
        "post": document.querySelector("input").value
    }
   
    console.log(formData);
   
    const optionPUT = {
      "method": "PUT",
      "headers": {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    fetch(url + "/" + this.props.match.params.id, optionPUT)
      .then((res)=> res.json())
      .then((data) =>
      console.log(data))
      .catch((err) => {
        console.log(err);
      });
  }; //update

remove(props) {
    console.log(props)
  fetch(url + '/' + props , optionDELETE)
    .then(res => res.json())
    .catch((err) => {
      console.log(err);
    });
}//remove

} //Vibe

export default Vibe;
