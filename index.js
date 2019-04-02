
const express = require('express');
const PORT = 3000;
const app = express();

const musicRouter = require('./routes/music');
app.use('/music', musicRouter);

app.listen(PORT, () => {
    console.log(`Running on ${PORT}`);
});
