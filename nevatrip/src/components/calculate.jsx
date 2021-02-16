import React from 'react'

function Calculate({
    handleSubmit,
    onChangeCount,
}) {
    return (
        <div className="num-cantainer">
            <label for="num">Количество билетов</label>
            <input id="num" onChange={onChangeCount}/>
            <button onClick={handleSubmit}>Посчитать</button>
        </div>
    )
}

export default Calculate
