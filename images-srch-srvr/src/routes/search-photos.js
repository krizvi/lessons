var express = require('express')
var router = express.Router()

const Photos = require('../models/photos');
const unsplash = require('../apis/unsplash');

router.get('/', async (req, res) => {
    console.warn(`received request from ${req.ip}`)
    try {
        const {query: term, size: imageSize} = req.query;

        // select * from photos where title='lion'
        let photosDocument = await Photos.findOne({title: term, imageSize})

        if (!photosDocument) {
            console.debug(`${term}:${imageSize} not found in local db`);
            photosDocument = await fetchAndSave(term, imageSize);
        } else {
            console.debug(`${term}:${imageSize} found in local db`);
        }
        res.status(200).send({results: photosDocument.images});
    } catch (err) {
        res.status(500).send({message: err});
    }
})

const fetchAndSave = async (term, imageSize) => {
    response = await unsplash.get('/search/photos', {params: {query: term}})
    imagesList = createImages(response.data.results, imageSize);
    savePhotos(term, imageSize, imagesList); // this will happen in background, asynchronously
    return {images: imagesList}; // return images' list and let photos saved in bg
}

// raw, full, regular, small, thumb
const createImages = (results, imageSize) => {
    return results.map(result => ({
        id: result.id,
        url: result.urls[imageSize]
    }))
}
const savePhotos = (term, imageSize, images) => {

    if (!images || images.length === 0) {
        console.warn('no data found to save');
        return;
    }

    const photos = new Photos(
        {title: term, images, imageSize}
    );

    photos.save()
        .then(data => {
            console.warn(`data saved as ${data.id}`)
        }, err => {
            console.error(err)
        });
}
module.exports = router;
