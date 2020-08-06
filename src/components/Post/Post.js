import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function Post(props) {
	let post = props.post.post;
	let index = props.post._id;

	return (
		<React.Fragment>
			<div id={index} className="div-post" onClick={props.callback}>
				{post}
			</div>
		</React.Fragment>
	);
}

export default Post;
