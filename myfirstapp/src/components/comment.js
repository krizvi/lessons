import React from 'react';
import CommentAvatar from "./comment-avatar";
import CommentContent from "./comment-content";

const Comment = (props) => {
    return (
        <div className="comment">
            <CommentAvatar/>
            <CommentContent author={props.author} date={props.date} text={props.text}/>
        </div>
    )
}

export default Comment;
