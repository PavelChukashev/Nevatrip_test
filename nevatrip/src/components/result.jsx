import React from 'react'
import moment from 'moment';

export default function Result({
    time = 50,
    route,
    count = 0,
    secondTime,
}) {
    const t = () => {
        switch (route) {
            case 'ab':
                return 'из A в B'
            case 'ba':
                return 'из B в A'
            default: return 'из A в B и обратно в А';
        }
    }
    return (
        <div>
            <p>{`Вы выбрали ${count} билета по маршруту ${t()} стоимостью ${count* secondTime ? 700 : 1200}р.`}</p>
            <p>{`Теплоход ${t()}отправляется в ${moment(time).format("HH:mm")}, а прибудет в ${moment(time).add(50, 'minutes').format("HH:mm")}.`}</p>
            {
                secondTime && <p>{`Теплоход из В в А отправлется в ${moment(secondTime).format("HH:mm")}, прибудет в ${moment(secondTime).add(50, 'minutes').format("HH:mm")}`}</p>
            }
            <p>{`Это путешествие займет у вас ${secondTime ? '1 ч 40 мин' : '50 мин'} минут.`}</p>
        </div>
    )
}
