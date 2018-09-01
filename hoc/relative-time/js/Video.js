'use strict';

const Video = props => {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
};

const DateTimePretty = ({date}) => {
    const dateDiff = Date.now() - Date.parse(date);
    const datePretty = dateDiff < 60 * 60 * 1000
        ? Math.ceil(dateDiff / 60 / 1000) + ' мтнут назад'
        : dateDiff < 24 * 60 * 60 * 1000
        ? Math.ceil(dateDiff / 60 / 60 / 1000) + ' часов назад'
        : Math.ceil(dateDiff / 24 / 60 / 60 / 1000) + ' дней назад';
    return <DateTime date={datePretty} />
};