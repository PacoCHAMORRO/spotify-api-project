const express = require('express');

app = express();

app.get('/', (req, res) => {
    res.send('Hello from Express');
});


app.listen(3000, () => {
    console.log('Server running!');
})