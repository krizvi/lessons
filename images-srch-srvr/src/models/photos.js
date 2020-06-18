const mongoose = require('mongoose');

/**
 {
	title:string,
	images:[string],
	date:Date
 }
 */

const PhotosSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    imageSize: {
        type: String,
        default: 'small',
        unique: true
    },
    images: [{}],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Photos', PhotosSchema);
