import React, {useState} from "react";

const QueryBar = ({onFormSubmit}) => {

    const [queryStr, setQueryStr] = useState('');
    const [imageSize, setImageSize] = useState('small');

    const OnChangeQuery = (event) => {
        setQueryStr(event.target.value)
    }
    const onChangeImageSize = (event) => {
        setImageSize(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(queryStr, imageSize);
    }

    return (
        <form className="ui form" onSubmit={onSubmit}>
                <div className="ui icon input">
                    <input
                        value={queryStr}
                        type="text"
                        placeholder="Search..."
                        onChange={OnChangeQuery}/>

                    <i className="search icon"/>
                </div>

                <select className="ui selection dropdown"
                        onChange={onChangeImageSize}>
                    <option value="small">Small</option>
                    <option value="raw">Raw</option>
                    <option value="regular">Regular</option>
                    <option value="full">Full</option>
                    <option value="thumb">Thumb</option>
                </select>
            <button className="ui button" type="submit" onClick={onSubmit}>Search</button>
        </form>
    )
}

export default QueryBar;
