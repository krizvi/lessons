var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send('hello world');
});

router.get('/now', (req, res) => {
    res.status(200).send(`HELLO WORLD @ ${Date.now()}`);
});


module.exports = router;
