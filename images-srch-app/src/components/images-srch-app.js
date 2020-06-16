import React, {useState} from "react";
import QueryBar from "./query-bar";
import ImagesList from "./images-list";
import photos from "../rest-apis/photos";

const ImagesSrchApp = () => {
    const [responses, setResponses] = useState([]);

    const onUserResponse = async queryStr => {
        const response = await photos.get('/search/photos', {
            params: {query: queryStr},
        })
	console.log(response.data.results);
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
