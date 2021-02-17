import React from 'react'
import { increaseDateBy, FORMATS } from '../utils/time';

function Time({
    time,
    store,
    route,
    secondTime,
    onChangeTime,
}) {
    const renderOption = (route, filter = false) => {
        const name = store.routes[route].title;
        const times = store.times[route] || store.times['ab'];
        const filteredTimes = filter ? times.filter(val => val > increaseDateBy(time, 50).format(FORMATS.default)) : times;

        return filteredTimes.map(value => (
            <option key={value} value={value}>{`${value} ${name}`}</option>
        ));
    }

    const handleTimeChange = (event) => {
        const { target } = event;

        onChangeTime(target.id, target.value);
    }

    const renderTime = () => {
        return (
            <>
                <label for="time">Выберите время</label>
                <select name="time" id="time" value={time} onChange={handleTimeChange}>
                    <option key={''} value={''}>Не выбрано</option>
                    {renderOption(route)}
                </select>
                {
                    route === 'aba' && time != '' &&
                    <select name="time-second" id="secondTime" value={secondTime} onChange={handleTimeChange}>
                        {renderOption('ba', true)}
                    </select>
                }
            </>
        )
    }

    return (
        <div className='time-container'>
            {renderTime()}
        </div>
    )
}

export default Time
