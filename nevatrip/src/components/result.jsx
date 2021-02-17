import React from 'react'

import { timeFromDate, increaseDateBy, FORMATS } from '../utils/time';

export default function Result({
    time,
    route,
    count = 0,
    store,
    secondTime,
}) {
    const title = store.routes[route].title;
    const price = store.prices[route];

    return (
        <div>
            <p>{`Вы выбрали ${count} билет(а) по маршруту ${title} стоимостью ${count * price}р.`}</p>
            <p>{`Теплоход ${title} отправляется в ${timeFromDate(time)}, а прибудет в ${increaseDateBy(time, 50).format(FORMATS.time)}.`}</p>
            {
                secondTime && <p>{`Теплоход из В в А отправлется в ${timeFromDate(secondTime)}, прибудет в ${increaseDateBy(secondTime, 50).format(FORMATS.time)}`}</p>
            }
            <p>{`Это путешествие займет у вас ${secondTime ? '1 ч 40 мин' : '50 мин'} минут.`}</p>
        </div>
    )
}
