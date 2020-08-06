import React, { Component } from "react";
import "./Home.css";
import Header from "../Header/Header";
import Addpost from "../Addpost/Addpost";
import Post from "../Post/Post";
import { Link } from "react-router-dom";


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
		fetch(url)
			.then((res) => {
				return res.json();
			})
			.then((posts) => {
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
				<Addpost callback={() => this.getPosts} />
				<Link to = '/vibes' ><ul className="ul-posts">{postsList}</ul></Link>
			</div>
		);
	}

	componentDidMount() {
		this.getPosts();
	} //componentDidMount
}

export default Home;
