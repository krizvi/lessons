import React from 'react';
import faker from "faker";

const CommentAvatar = () => {
    return (
        <div>
            <a className="avatar">
                <img src={faker.image.avatar()}/>
            </a>
        </div>
    );
}

export default CommentAvatar;
