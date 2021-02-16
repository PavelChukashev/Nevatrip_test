import React, { useState } from 'react'
import Route from './route'
import Departure from './departureTime'
import Calculate from './calculate'
import Result from './result'

import moment from 'moment';

const routes = [ "из A в B", "из B в A", "из A в B и обратно в А" ]

const store = {
    routes: {
        "ab": {
            title: "из A в B",
            value: [
                '2021-08-21 18:00:00',
                '2021-08-21 18:30:00',
                '2021-08-21 18:45:00',
                '2021-08-21 19:00:00',
                '2021-08-21 19:15:00',
                '2021-08-21 21:00:00',
            ]
        },
        "ba": {
            title: "из B в A",
            value: [
                '2021-08-21 18:30:00',
                '2021-08-21 18:45:00',
                '2021-08-21 19:00:00',
                '2021-08-21 19:15:00',
                '2021-08-21 19:35:00',
                '2021-08-21 21:50:00',
                '2021-08-21 21:55:00',
            ]
        },
        "aba": {
            title: "из A в B и обратно в А",
        }
    }
}

function Main() {
    const [route, setRoute] = useState('ab');
    const [time, setTime] = useState(null);
    const [secondTime, setSecondTime] = useState(null);

    const [count, setCount] = useState(0);
    const [isShow, setShow] = useState(false);

    const onChangeRoute = (event) => {
        setRoute(event.target.value);
        setShow(false)
        setSecondTime(null)
    }

    const onChangeTime = (event) => {
        setTime(event.target.value);
        setShow(false)
        setSecondTime(null)
    }

    const onChangeSecondTime = (event) => {
        setSecondTime(event.target.value);
        setShow(false)
    }

    const onChangeCount = (event) => {
        setCount(event.target.value);
        setShow(false)
    }

    const handleSubmit = () => {
        setShow(true);
    }

    const passTimes = (aba = false) => {
        if (route === 'aba') {
            if (aba) {
                return store.routes["ba"].value.filter(value => value > moment(time).add(50, 'minutes').format("YYYY-MM-DD HH:mm:ss"))
            } else {
                return store.routes["ab"].value
            }
        } else {
            return store.routes[route].value
        }
    }

    return (
        <div className="main-container">
            <Route 
                routes={store.routes}
                onChangeRoute={onChangeRoute}
            />
            <Departure
                route={route}
                times={passTimes()}
                onChangeTime={onChangeTime}
            />
            {
                route === 'aba' && 
                    (
                        <Departure
                            ba={true}
                            route={route}
                            times={passTimes(true)}
                            onChangeTime={onChangeSecondTime}
                        />
                    )
            }
            <Calculate
                handleSubmit={handleSubmit}
                onChangeCount={onChangeCount}
            />
            {
                isShow && <Result
                                time={time}
                                secondTime={secondTime}
                                route={route}
                                count={count}
                            />
            }
        </div>
    )
}


export default Main
