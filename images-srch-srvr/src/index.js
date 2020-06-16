const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const searchPhotos = require('./routes/search-photos');

const os = require('os');

const app = express();
app.set('trust proxy', true)
app.use(cors());

app.get('/search/photos', async (req, res) => {
    await searchPhotos(req, res);
});

const bootstrap = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/PhotosDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        const port = 8089;
        app.listen(port, () => {
            console.warn(`serving from ${os.hostname()}. listening on port ${port}`);
        })
    } catch (err) {
        console.error(err);
    }
}

bootstrap();



