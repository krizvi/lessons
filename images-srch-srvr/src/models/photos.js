const mongoose = require('mongoose');

const PhotosSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    images: [{}],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Photos', PhotosSchema);
