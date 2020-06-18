import React from "react";

const ImagesList = ({images}) => {
    return (
        <div>
            {images.map(image=> <img key={image.id} src={image.url} alt=""/>)}
        </div>
    )
}
export default ImagesList;


