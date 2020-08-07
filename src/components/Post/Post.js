import React from "react";
import "./Post.css";

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
