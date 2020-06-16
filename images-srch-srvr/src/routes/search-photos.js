const Photos = require('../models/photos');
const unsplash = require('../apis/unsplash');

module.exports = async (req, res) => {
    console.warn(`received request from ${req.ip}`)
    try {
        const {query: term} = req.query;
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

const fetchAndSave = async term => {
    response = await unsplash.get('/search/photos', {params: {query: term}})
    imagesList = createImages(response.data.results);
    return await savePhotos(term, imagesList);
}

const createImages = results => {
    return results.map(result => ({
        id: result.id,
        urls: {small: result.urls.small}
    }))
}
const savePhotos = async (term, images) => {
    const photos = new Photos({
        title: term,
        images
    });
    const savedPhotos = await photos.save();
    return savedPhotos;
}
