'use strict';

const Video = props => {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
};

class DateTimePretty extends React.Component {

    minute = 60 * 1000;
    hour = 60 * this.minute;
    day = 24 * this.hour;

    datePretty = date => {
        const dateDiff = Date.now() - Date.parse(date);
        return dateDiff < this.hour
            ? Math.ceil(dateDiff / this.minute) + ' мтнут назад'
            : dateDiff < this.day
            ? Math.ceil(dateDiff / this.hour) + ' часов назад'
            : Math.ceil(dateDiff / this.day) + ' дней назад';
    }

    render() {
        return <DateTime date={this.datePretty(this.props.date)} />
    }
};