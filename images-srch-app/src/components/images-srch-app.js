import React, {useState} from "react";
import QueryBar from "./query-bar";
import ImagesList from "./images-list";
import axios from 'axios';

const ImagesSrchApp = () => {
    const [responses, setResponses] = useState([]);

    const onUserResponse = async queryStr => {

        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {query: queryStr},
            headers: {
                Authorization: 'Client-ID vlPcuQtdQgqaqUD-UlGKgCaSBCIUP8kbcYXJUBq9R0s'
            }
        })

        setResponses(response.data.results);
    }

    return (
        <div className='ui container'>
            <QueryBar userResponse={onUserResponse} name='john'/>
            <ImagesList images={responses}/>
        </div>
    )
}
export default ImagesSrchApp;
