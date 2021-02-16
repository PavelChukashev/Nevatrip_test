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

function Departure() {
    return (
        <div className='time-container'>
            <label for="time">Выберите время</label>
            <select name="time" id="time">
            <option value="18:00(из A в B)">18:00(из A в B)</option>
            <option value="18:30(из A в B)">18:30(из A в B)</option>
            <option value="18:45(из A в B)">18:45(из A в B)</option>
            <option value="19:00(из A в B)">19:00(из A в B)</option>
            <option value="19:15(из A в B)">19:15(из A в B)</option>
            <option value="21:00(из A в B)">21:00(из A в B)</option>
            <option value="18:30(из B в A)">18:30(из B в A)</option>
            <option value="18:45(из B в A)">18:45(из B в A)</option>
            <option value="19:00(из B в A)">19:00(из B в A)</option>
            <option value="19:15(из B в A)">19:15(из B в A)</option>
            <option value="19:35(из B в A)">19:35(из B в A)</option>
            <option value="21:50(из B в A)">21:50(из B в A)</option>
            <option value="21:55(из B в A)">21:55(из B в A)</option>
            </select>
        </div>
    )
}

export default Departure