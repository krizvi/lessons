import React from 'react';
import faker from "faker";

const CommentContent = (props) => {
return(
    <div className="content">
        <a className="author">{props.author}</a>
        <div className="metadata">
            <span className="date">{props.date}</span>
        </div>
        <div className="text">
            {props.text}
        </div>
    </div>

    )
}
export default CommentContent;
