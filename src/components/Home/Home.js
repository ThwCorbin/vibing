import React, { Component } from "react";
import "./Home.css";
import Header from "../Header/Header";
import Addpost from "../Addpost/Addpost";
import Post from "../Post/Post";

const url = `https://vibing-api.herokuapp.com/home/posts`;

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
		};
	}

	getPosts = () => {
		// * Fetch posts
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((posts) => {
				console.log(posts[0].post);
				this.setState({
					posts: posts,
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
				<Addpost />
				<ul className="ul-posts">{postsList}</ul>
			</div>
		);
	}

	componentDidMount() {
		this.getPosts();
	} //componentDidMount
}

export default Home;
