import React from "react";
import "./Link.css";

const Link = ({ data }) => {
	return (
		<a href={data.link} id={data.id} target="_blank">
			<img src={data.icon} alt="" />
		</a>
	);
};

export default Link;
