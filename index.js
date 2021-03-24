const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.send('<h2>Hello Node and Mongo... YAY</h2>');
});

app.listen(3000, () => console.log('Listening to port 3000'));