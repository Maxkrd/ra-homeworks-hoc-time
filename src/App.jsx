import React, {useState} from 'react';
import './App.css';
import dayjs from 'dayjs';

function DateTimePretty(props) {
    const now = dayjs();
    const diff = now.diff(props.date, 'minute');
    if (diff < 60) {
        return (
            <DateTime {...props} {...{date: `${diff} минут назад`}} />
        )
    } else if (diff < 24 * 60) {
        const hours = Math.floor(diff / 60);
        return (
            <DateTime {...props} {...{date: `${hours} часов назад`}} />
        )
    } else if (diff < 30 * 24 * 60) {
        const days = Math.floor(diff / (24 * 60));
        return (
            <DateTime {...props} {...{date: `${days} дней назад`}} />
        )
    } else if (diff < 12 * 30 * 24 * 60) {
        const months = Math.floor(diff / (30 * 24 * 60));
        return (
            <DateTime {...props} {...{date: `${months} месяцев назад`}} />
        );
    } else {
        const years = Math.floor(diff / (12 * 30 * 24 * 60));
        return (
            <DateTime {...props} {...{date: `${years} лет назад`}} />
        )
    }
}

function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    )
}

function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
}

function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export default function App() {
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-07-31 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-03-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-02-03 23:16:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-12-02 05:24:00'
        },
    ]);

    return (
        <VideoList list={list} />
    );
}
