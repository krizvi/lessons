import React from 'react';
import faker from "faker";

const CommentAvatar = () => {
    return (
        <a className="avatar">
            <img src={faker.image.avatar()}/>
        </a>
    );
}

export default CommentAvatar;
