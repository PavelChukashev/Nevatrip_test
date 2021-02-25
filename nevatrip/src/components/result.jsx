import React from "react";

import { timeFromDate, increaseDateBy, FORMATS } from "../utils/time";


const ticket = ["билет", "билета", "билетов"];

function wordEnding(count, ticket) { 
	let cases = [2, 0, 1, 1, 1, 2]
	return ticket[(count % 100 > 4 && count % 100 < 20) ? 2 : cases[(count % 10 < 5) ? count % 10 : 5]];
}

function Result({
	time,
	route,
	count = null,
	store,
	secondTime,
}) {
	const title = store.routes[route].title;
	const price = store.prices[route];

	return (
		<div>
			<p>{`Вы выбрали ${count} ${wordEnding(count, ticket)} по маршруту ${title} стоимостью ${count * price}р.`}</p>
			<p>{`Теплоход ${title} отправляется в ${timeFromDate(time)}, а прибудет в ${increaseDateBy(time, 50).format(FORMATS.time)}.`}</p>
			{secondTime && (
				<p>{`Теплоход из В в А отправлется в ${timeFromDate(secondTime)}, прибудет в ${increaseDateBy(secondTime, 50).format(FORMATS.time)}`}</p>
			)}
			<p>{`Это путешествие займет у вас ${secondTime ? "1 ч 40 мин" : "50 мин"} минут.`}</p>
		</div>
	);
}

export{
	wordEnding,
	Result
}
