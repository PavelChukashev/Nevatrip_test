import React, { useEffect, useMemo } from "react";
import { increaseDateBy, FORMATS } from "../utils/time";

function Time({ time, store, route, secondTime, onChangeTime }) {
	const times = useMemo(() => store.times[route] || store.times["ab"], [
		store,
		route,
	]);
	const filteredTimes = useMemo(
		() =>
			times.filter(
				(val) => val > increaseDateBy(time, 50).format(FORMATS.default)
			),
		[time, times]
	);

	const renderOption = (route, filter = false) => {
		const name = store.routes[route].title;
		const filtered = filter ? filteredTimes : times;

		return filtered.map((value) => (
			<option key={value} value={value}>{`${value} ${name}`}</option>
		));
	};

	const handleTimeChange = (event) => {
		const { target } = event;

		onChangeTime(target.id, target.value);
	};

	useEffect(() => {
		if (!time && !secondTime) {
			if (route === "aba") {
				onChangeTime("secondTime", filteredTimes[0]);
			}

			onChangeTime("time", times[0]);
		}
	}, [time, secondTime, route, times, onChangeTime, filteredTimes]);

	const renderTime = () => {
		return (
			<>
				<label htmlFor='time'>Выберите время</label>
				<select name='time' id='time' value={time} onChange={handleTimeChange}>
					{renderOption(route)}
				</select>
				{route === "aba" && (
					<select
						name='time-second'
						id='secondTime'
						value={secondTime}
						onChange={handleTimeChange}>
						{renderOption("ba", true)}
					</select>
				)}
			</>
		);
	};

	return <div className='time-container'>{renderTime()}</div>;
}

export default Time;
