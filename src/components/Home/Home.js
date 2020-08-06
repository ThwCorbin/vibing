import React, { Component } from "react";
import "./Home.css";
import Header from "../Header/Header";
import Post from "../Post/Post";
import Textarea from "../Textarea/Textarea";

const url = `https://vibing-api.herokuapp.com/home/posts`;

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
		};
	}

	handleEvent = (e) => {
		console.log(e);
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
				return <Post post={post} callback={this.handleEvent} key={idx} />;
			}); //answerList
		}
		return (
			<div className="App">
				<Header />
				<Textarea callback={this.getPosts} />
				<ul className="ul-posts">{postsList}</ul>
			</div>
		);
	}

	componentDidMount() {
		this.getPosts();
	} //componentDidMount
}

export default Home;
