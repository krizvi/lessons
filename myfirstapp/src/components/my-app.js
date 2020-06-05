import React from 'react';
import Comment from "./comment";

const MyApp = () => {
    const data = [
        {author: 'k', date: '05/01/2020', text: 't11'},
        {author: 'l', date: '05/02/2020', text: 't12'},
        {author: 'm', date: '05/03/2020', text: 't13'},
    ];

    const numbers = [1, 2, 3, 4, 5, 6];
    const grT3 = numbers.filter(number => number >= 3);
    console.log(grT3);

    return (
        <div className="ui container comments">
            {data.map(rec => <Comment date={rec.date} text={rec.text} author={rec.author}/>)}
        </div>
    );
}

export default MyApp;

