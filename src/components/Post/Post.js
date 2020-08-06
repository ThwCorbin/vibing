import React from "react";
import "./Post.css";

function Post(props) {
	let post = props.post.post;

	return (
		<li className="li-post" onClick={props.callback}>
			{post}
		</li>
	);
}

export default Post;
