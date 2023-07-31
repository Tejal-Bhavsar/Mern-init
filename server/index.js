const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect()
const PORT = 4000

app.listen(PORT, () => {
    console.log('Hey see you at' + `${PORT}`);
})