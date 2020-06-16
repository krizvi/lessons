const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());


const repo = {};

app.get('/ping', (req, res) => {
    res.status(200).send('PONG');
})

app.get('/search/photos', async (req, res) => {
    const {query} = req.query;
    // search for this term in local cache (MongoDB)
    // if the term is found in local cache, return the results
    // if not found, then
    // go and get the result from unplash and feed the result to locl cache
    // and return the results to the caller

    let response = repo[query];

    const fetchDataFromUnplash = async (query) => {
        return [
            {
                id: "EY3tC81nFt0",
                urls: {small: 'https://images.unsplash.com/photo-1566706546199-a93ba33ce9f7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MTU4M30'}
            },
            {
                id: "EY3tC81nFt77",
                urls: {small: 'https://images.unsplash.com/photo-1566706546199-a93ba33ce9f7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MTU4M30'}
            },
            {
                id: "EY3tC81nFt67",
                urls: {small: 'https://images.unsplash.com/photo-1566706546199-a93ba33ce9f7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MTU4M30'}
            },
            {
                id: "EY3tC81nFtrr",
                urls: {small: 'https://images.unsplash.com/photo-1566706546199-a93ba33ce9f7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MTU4M30'}
            },
        ];
    }

    if (!response) {
        console.log(`data not found in cache for term '${query}', asking unsplash`)
        repo[query] = await fetchDataFromUnplash(query);

        response = repo[query];
    } else {
        console.log(`data found in cache for term '${query}'`)
    }

    res.send({results: response});
});

app.listen(8089, () => {
    console.log('images-srch-node server started listening on port 8089');
})
