import React from 'react';
import faker from 'faker';

const CommentBase = () => {
    return (
        <div className="comment">

            <a className="avatar">
                <img src={faker.image.avatar()}/>
            </a>

            <div className="content">
                <a className="author">{faker.name.findName()}</a>

                <div className="metadata">
                    <span className="date">{JSON.stringify(faker.date.recent())} </span>
                </div>

                <div className="text">
                    {faker.lorem.text()}
                </div>

                <div className="actions">
                    <a className="reply">Reply</a>
                </div>
            </div>
        </div>
    )
}

export default CommentBase;
