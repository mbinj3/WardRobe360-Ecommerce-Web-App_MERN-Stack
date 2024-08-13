const express = require('express');
require('dotenv').config();
const productRouter = require('./routes/product');
const cors = require('cors');
const path = require('path');
const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');



const server = express();

server.use(express.json());
server.use(cors());

server.use('/user', signupRoute);
server.use('/auth', loginRoute);
server.use('/', productRouter.router);

server.get('/', (req, res) => {
    server.use(express.static(path.resolve(__dirname, "client", "build")));
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

server.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})