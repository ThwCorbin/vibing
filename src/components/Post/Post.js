import React from "react";
import "./Post.css";

function Post(props) {
	let post = props.post.post;
	let index = props.post._id;

	return (
		<li id={index} className="li-post" onClick={props.callback}>
			{post}
		</li>
	);
}

export default Post;
