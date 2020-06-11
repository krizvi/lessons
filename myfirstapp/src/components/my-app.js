import React from 'react';
import Comment from "./comment";
import Confirmation from "./confirmation";

const MyApp = () => {
    //                      |--> Comment AVatar
    // myApp --> Comment -- |
    //|--> CommentContent
    const data = [
        {
            author: 'Khalid Rizvi',
            date: '05/01/2020',
            text: 'nsatiable concealed six simplicity pleasant next'
        },
        {
            author: 'Lynda Shapero',
            date: '05/02/2020',
            text: 'd had very situation out here zealously yet '
        },
        {
            author: 'Adrian Monk',
            date: '05/03/2020',
            text: 'entire Our compact being desirous '
        },
    ];
    return (
        <div className="ui container comments">
            {data.map(rec => {
                return (
                    <Confirmation>
                        <Comment date={rec.date} text={rec.text} author={rec.author}/>
                    </Confirmation>
                )
            })}
        </div>
    );
}

export default MyApp;
