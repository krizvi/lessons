const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Photos = require('./models/photos');
const axios = require('axios');

const app = express();
app.use(cors());

app.get('/search/photos', async (req, res) => {
    try {
        const {query: term} = req.query;
        let photosDocument = await Photos.findOne({title: term})

        if (!photosDocument) {
            // response = await unsplash.get('/search/photos', {params: {query: term}})
            console.log(`${term} not found in local db`);
            photosDocument = await fetchAndSave(term);
        } else {
            console.log(`${term} found in local db`);
        }
        res.status(200).send({results: photosDocument.images});
    } catch (err) {
        res.status(500).send({mesage: err});
    }
});

const fetchAndSave = async term => {
    response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {query: term},
        headers: {
            Authorization: 'Client-ID McRJL61MPkHa6Z9Z45BceAOCLFbQoopsQ7Wnk7lv9Hw'
        }
    })
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

const startUp = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/PhotosDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        const port = 8089;
        app.listen(port, () => {
            console.log('listening on port ', port);
        })
    } catch (err) {
        console.error(err);
    }
}

startUp();



