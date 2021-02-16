import React from 'react'

function Route({
    routes,
    onChangeRoute
}) {
    const renderOptions = () => {
        return Object.keys(routes).map(key => (
            <option key={key} value={key}>{routes[key].title}</option>
        ));
    }

    return (
        <div className="route-container">
            <label>Выберите направление</label>
            <select name="route" id="route" onChange={onChangeRoute}>
                {renderOptions()}
            </select>
            <label htmlFor="route">Время пути в одну сторону составляет 50 минут</label>
        </div>
    )
}

export default Route
