import React from 'react'

function Calculate({
    count,
    handleSubmit,
    onChangeCount,
}) {
    return (
        <div className="num-cantainer">
            <label for="num">Количество билетов</label>
            <input id="num" value={count} onChange={onChangeCount}/>
            <button onClick={handleSubmit}>Посчитать</button>
        </div>
    )
}

export default Calculate
