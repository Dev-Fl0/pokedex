require("dotenv").config();

const express = require('express');

const router = require('./router');

const PORT = process.env.PORT || 4000;

const app = express();

app.set("view engine", "ejs");
app.set('views', './app/views');

app.use(express.static('public'));

app.use(router);

app.listen(PORT, () => {
    console.log(`Server ready: http://localhost:${PORT}`);
});