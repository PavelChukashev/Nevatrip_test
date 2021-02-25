import React, { useState } from "react";
import Route from "./route";
import Time from "./time";
import Calculate from "./calculate";
import {Result} from "./result";

const store = {
	times: {
		ab: [
			"2021-08-21 18:00:00",
			"2021-08-21 18:30:00",
			"2021-08-21 18:45:00",
			"2021-08-21 19:00:00",
			"2021-08-21 19:15:00",
			"2021-08-21 21:00:00",
		],
		ba: [
			"2021-08-21 18:30:00",
			"2021-08-21 18:45:00",
			"2021-08-21 19:00:00",
			"2021-08-21 19:15:00",
			"2021-08-21 19:35:00",
			"2021-08-21 21:50:00",
			"2021-08-21 21:55:00",
		],
	},
	routes: {
		ab: {
			title: "из A в B",
		},
		ba: {
			title: "из B в A",
		},
		aba: {
			title: "из A в B и обратно в А",
		},
	},
	prices: {
		ab: 700,
		ba: 700,
		aba: 1200,
	},
};

function Main() {
	const [route, setRoute] = useState("ab");
	const [time, setTime] = useState("");
	const [secondTime, setSecondTime] = useState("");

	const [count, setCount] = useState(1);
	const [isShow, setShow] = useState(false);

	const clearState = () => {
		setTime("");
		setShow(false);
		setCount(1);
		setSecondTime("");
	};

	const onChangeRoute = (event) => {
		setRoute(event.target.value);
		clearState();
	};

	const onChangeTime = (id, time) => {
		if (id === "time") {
			setTime(time);
		} else {
			setSecondTime(time);
		}

		setShow(false);
	};

	const onChangeCount = (event) => {
		const { target } = event;

		setShow(false);
		setCount(target.value);
	};

	const handleSubmit = () => {
		setShow(true);
	};

	return (
		<div className='main-container'>
			<Route routes={store.routes} onChangeRoute={onChangeRoute} />
			{route && (
				<Time
					time={time}
					route={route}
					store={store}
					secondTime={secondTime}
					onChangeTime={onChangeTime}
				/>
			)}
			<Calculate
				count={count}
				handleSubmit={handleSubmit}
				onChangeCount={onChangeCount}
			/>
			{isShow && count > 0 && (
				<Result
					time={time}
					route={route}
					count={count}
					store={store}
					secondTime={secondTime}
				/>
			)}
		</div>
	);
}

export default Main;
