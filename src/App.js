import { useState, useEffect } from "react";
import "./App.css";
import { links } from "./data/links.js";
import Link from "./components/link/Link.js";

const App = () => {
	const [currentTime, setCurrentTime] = useState("");
	const [currentDate, setCurrentDate] = useState("");

	const setTime = () => {
		const today = new Date();
		const hours = ("0" + today.getHours()).slice(-2);
		const minutes = ("0" + today.getMinutes()).slice(-2);
		const seconds = ("0" + today.getSeconds()).slice(-2);
		var time = hours + ":" + minutes + ":" + seconds;

		setCurrentTime(time);
	};

	const setDate = () => {
		const today = new Date();
		const day = today.toLocaleDateString("en-UK", { weekday: "long" });
		const date = today.getDate();
		const month = today.toLocaleDateString("en-UK", { month: "long" });

		setCurrentDate(`${day}, ${month} ${date}`);
	};

	useEffect(() => {
		setTime();
		setDate();

		const interval = setInterval(() => {
			setTime();
			setDate();
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	const renderLinks = (data) => {
		return data.map((el) => (
			<li key={el.id}>
				<Link data={el} />
			</li>
		));
	};

	return (
		<>
			<div className="content">
				<div className="inner">
					<section className="left">
						<ul>{renderLinks(links.tui)}</ul>
					</section>
					<section className="centre">
						<div className="time">{currentTime}</div>
						<div className="date">{currentDate}</div>
					</section>
					<section className="right">
						<ul>{renderLinks(links.home)}</ul>
					</section>
				</div>
			</div>
		</>
	);
};

export default App;
