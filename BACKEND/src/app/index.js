const express = require('express');
const cors = require('cors');
const loginRoutes = require('../routes/login-routes.js');
const app = express();
app.use(cors());
app.use(express.json());
app.use(loginRoutes);
app.listen(3333, (error) => {
    if (!error) {
        console.log('Servidor iniciado!');
    } else {
        console.log('Servidor não foi iniciado!');
        throw Error(error);
    }
})