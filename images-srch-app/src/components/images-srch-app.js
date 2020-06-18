import React, {useState} from "react";
import QueryBar from "./query-bar";
import ImagesList from "./images-list";
import photos from "../rest-apis/photos";

const ImagesSrchApp = () => {
    const [responses, setResponses] = useState([]);

    const onSubmit = async (queryStr, imageSize) => {
        console.log(queryStr, imageSize);
        const response = await photos.get('/search/photos', {
            params: {query: queryStr, size: imageSize},
        })
        setResponses(response.data.results);
    }

    return (
        <div className='ui container'>
            <QueryBar onFormSubmit={onSubmit}/>
            <ImagesList images={responses}/>
        </div>
    )
}
export default ImagesSrchApp;
