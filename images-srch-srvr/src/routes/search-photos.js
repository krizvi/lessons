const Photos = require('../models/photos');
const unsplash = require('../apis/unsplash');

module.exports = async (req, res) => {
    console.warn(`received request from ${req.ip}`)
    try {
        const {query: term, } = req.query;
        let photosDocument = await Photos.findOne({title: term})

        if (!photosDocument) {
            console.debug(`${term} not found in local db`);
            photosDocument = await fetchAndSave(term);
        } else {
            console.debug(`${term} found in local db`);
        }
        res.status(200).send({results: photosDocument.images});
    } catch (err) {
        res.status(500).send({message: err});
    }
}
// raw, full, regular, small, thumb
const fetchAndSave = async term => {
    response = await unsplash.get('/search/photos', {params: {query: term}})
    imagesList = createImages(response.data.results);
    savePhotos(term, imagesList); // this will happen in background, asynchronously
    return {images: imagesList};
}

const createImages = results => {
    return results.map(result => ({
        id: result.id,
        urls: {small: result.urls.small}
    }))
}
const savePhotos = (term, images) => {

    if (!images || images.length === 0) {
        console.warn('no data found to save');
        return;
    }

    const photos = new Photos({
        title: term,
        images
    });

    photos.save()
        .then(data => {
            console.warn(`data saved as ${data.id}`)
        }, err => {
            console.error(err)
        });
}
