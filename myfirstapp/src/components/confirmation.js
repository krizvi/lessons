import React from "react";

const Confirmation = (props) => {
    return (
        <div className='ui card'>
            <div className='content'>{props.children}</div>
            <div className='extra content'>
                <div className='ui two buttons'>
                    <div className='ui basic green button'>{props.yes || 'Yes'}</div>
                    <div className='ui basic red button'>{props.no || 'No'}</div>
                </div>
            </div>
        </div>
    )
}

export default Confirmation;
