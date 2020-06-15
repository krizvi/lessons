const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const repo = {};

app.get('/search/photos', (req, res) => {
    //console.log(`request ${JSON.stringify(req.query)} coming from client ${req.headers.host}`);

    const {query} = req.query;
    let response = repo[query];

    if (!response) {
        console.log(`'${query}' not found in the cache`);
        repo[query] = [
            {
                id: "gRB4Euk4BYQ",
                urls: {small: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MTU4M30'}
            },
            {
                id: "0sPKk1YWmBc",
                urls: {small: 'https://images.unsplash.com/photo-1517957754642-2870518e16f8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MTU4M30'}
            },
            {
                id: "gRB4Euk4BYk",
                urls: {small: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MTU4M30'}
            },
            {
                id: "gRB4Euk4BYl",
                urls: {small: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0MTU4M30'}
            },
        ];
        response = repo[query];
    } else {
        console.log(`'${query}' found in the cache`);
    }

    // send teh response
    res.send({results: response});
});

const port = 8081;
app.listen(port, () => {
    console.log('listening on port ', port);
})


