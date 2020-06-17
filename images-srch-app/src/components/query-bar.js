import React, {useState} from "react";

const QueryBar = ({onFormSubmit}) => {

    const [queryStr, setQueryStr] = useState('');
    const [imageSize, setImageSize] = useState('small');

    const handleQueryOnChange = (event) => {
        setQueryStr(event.target.value)
    }
    const handleImageSizeOnChange = (event) => {
        setImageSize(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(queryStr, imageSize);
    }

    return (
        <form className="ui form" onSubmit={handleOnSubmit}>
            <div className="ui icon input">
                <input
                    value={queryStr}
                    type="text"
                    placeholder="Search..."
                    onChange={handleQueryOnChange}/>

                <i className="search icon"/>
            </div>

            <div className="ui selection dropdown">
                <input
                    type="hidden"
                    value={imageSize}
                    onChange={handleImageSizeOnChange}
                />
                <i className="dropdown icon"></i>
                <div className="default text">Image Size</div>
                <div className="menu">
                    <div className="item" data-value="small">Small</div>
                    <div className="item" data-value="raw">Raw</div>
                    <div className="item" data-value="regular">Regular</div>
                    <div className="item" data-value="full">Full</div>
                    <div className="item" data-value="thumb">Thumb</div>
                </div>
            </div>

            <button className="ui button" type="submit" onClick={handleOnSubmit}>Search</button>
        </form>
    )
}

export default QueryBar;
