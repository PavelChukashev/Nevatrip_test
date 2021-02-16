import React from 'react'

// const departureTimeAtoB = [
//     {id: 1, complited: false, title: '18:00'},
//     {id: 2, complited: false, title: '18:30'},
//     {id: 3, complited: false, title: '18:45'},
//     {id: 4, complited: false, title: '19:00'},
//     {id: 5, complited: false, title: '19:15'},
//     {id: 6, complited: false, title: '21:00'}
// ];

// const departureTimeBtoA = [
//     {id: 2, complited: false, title: '18:30'},
//     {id: 3, complited: false, title: '18:45'},
//     {id: 4, complited: false, title: '19:00'},
//     {id: 5, complited: false, title: '19:15'},
//     {id: 1, complited: false, title: '19:35'},
//     {id: 6, complited: false, title: '21:50'},
//     {id: 7, complited: false, title: '21:55'},
// ];

// AtoB = {[ "18:00", "18:30", "18:45", "19:00", "19:15", "21:00" ]}
// BtoA = {[ "18:30", "18:45", "19:00", "19:15", "19:35", "21:50", "21:55" ]}


function Departure({
    ba,
    route,
    times,
    onChangeTime,
}) {
    const renderOption = () => {
        let name = 'из A в B'

        if (route === 'ba' || ba) {
            name = 'из B в A'
        } else if (route === 'aba') {
            name = 'из A в B и обратно в А'
        }

        return times.map(time => (
            <option key={time} value={time}>{`${time} ${name}`}</option>
        ));
    }

    return (
        <div className='time-container'>
            <label for="time">Выберите время</label>
            <select name="time" id="time" onChange={onChangeTime}>
                {renderOption()}
            </select>
        </div>
    )
}

export default Departure
