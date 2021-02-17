import moment from 'moment';

const FORMATS = {
    "time": "HH:mm",
    "default": "YYYY-MM-DD HH:mm:ss"
}

const increaseDateBy = (time, inc) => {
    return moment(time).add(inc, 'minutes');
}

const timeFromDate = (time) => {
    return moment(time).format(FORMATS.time);
}

export {
    FORMATS,
    timeFromDate,
    increaseDateBy,
}
