import React from 'react'

function Route() {
    return (
        <div className="route-container">
            <label>Выберите направление</label>
            <select name="route" id="route">
                <option value="из A в B">из A в B</option>
                <option value="из B в A">из B в A</option>
                <option value="из A в B и обратно в А">из A в B и обратно в А</option>
            </select>
        </div>
    )
}

export default Route