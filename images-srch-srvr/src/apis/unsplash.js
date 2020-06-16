const axios = require('axios');

module.exports = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID McRJL61MPkHa6Z9Z45BceAOCLFbQoopsQ7Wnk7lv9Hw'
    }
});
