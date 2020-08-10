import React, { Component } from "react";
import "./Home.css";
import Header from "../Header/Header";
import Post from "../Post/Post";
import Textarea from "../Textarea/Textarea";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const url = `https://vibing-api.herokuapp.com/home/posts`;

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			data: [],
			id: "",
		}; //state
	} //constructor

	handleEvent = (e) => {
		this.setState({ id: e.target.id });
	}; //handleEvent

	getPosts = () => {
		// * Fetch posts
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
					<div className="div-posts">
						<Post
							post={post}
							id={this.state.id}
							callback={this.handleEvent}
							key={idx}
						/>
						{this.state.id ? (
							<Link to={"/vibes/" + this.state.id}>
								 <Button type="primary" small outline label="Edit" />
								   
							</Link>
						) : (
							<Button type="primary" small outline label="Edit" />
						)}
					</div>
				); //return
			}); //postList
		} else {
			postsList = <div className="div-loading">Vibes Loading</div>;
		}
		return (
			<React.Fragment>
				<div className="App">
					<Header />
					<Textarea callback={this.getPosts} />
					<div className="div-posts">{postsList}</div>
				</div>
			</React.Fragment>
		); //return
	} //render

	componentDidMount() {
		this.getPosts();
	} //componentDidMount
} //Home

export default Home;
