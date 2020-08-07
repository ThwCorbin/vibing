import React from "react";
import "./Quote.css";

function Quote(props) {
	return (
		<div className="div-quote-and-name" key={props.idx}>
			<p className="p-quote-quote">{props.quote}</p>
			<p className="p-quote-name">{props.name}</p>
		</div>
	);
}

export default Quote;
