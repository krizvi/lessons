import React, {useState} from "react";

const QueryBar = (props) => {
    const {userResponse} = props;

    const [queryStr, setQueryStr] = useState('');

    const handleOnChange = (event) => {
        setQueryStr(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        userResponse(queryStr);
    }

    return (
        <form className="ui form" onSubmit={handleOnSubmit}>
            <div className="ui icon input">
                <input
                    value={queryStr}
                    type="text"
                    placeholder="Search..."
                    onChange={handleOnChange}/>

                <i className="search icon"/>
            </div>
        </form>
    )
}

export default QueryBar;
