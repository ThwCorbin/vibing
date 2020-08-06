import React, { Component } from "react";
import "./Home.css";
import Header from "../Header/Header";
import Post from "../Post/Post";
import Textarea from "../Textarea/Textarea";
import { Link } from "react-router-dom";

const url = `https://vibing-api.herokuapp.com/home/posts`;

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			data: [],
			id: "",
		};
	}

	handleEvent = (e) => {
		console.log(e.target.id);
		this.setState({ id: e.target.id });
	};

	getPosts = () => {
		// * Fetch posts
		console.log("Something fetched");
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((posts) => {
				this.setState({
					posts: posts.reverse(),
				}); //setState
			})

			.then(() => {}); //fetch
	}; //getPosts

	render() {
		//* check if posts array is defined
		//* then build list of posts
		let postsList;
		if (this.state.posts) {
			let postsArr = this.state.posts;
			postsList = postsArr.map((post, idx) => {
				return (
					<Post
						post={post}
						id={this.state.id}
						callback={this.handleEvent}
						key={idx}
					/>
				);
			}); //answerList
		}
		return (
			<React.Fragment>
				<div className="App">
					<Header />
					<Textarea callback={this.getPosts} />
					<div className="div-posts">{postsList}</div>
				</div>
			</React.Fragment>
		);
	}

	componentDidMount() {
		this.getPosts();
	} //componentDidMount
}

export default Home;
