const express       = require('express');
const mongoose      = require('mongoose');
const authRoutes    = require('./routes/auth'); //IMPORTING AUTH ROUTES
const postRoutes    = require('./routes/posts'); //IMPORTING POSTS ROUTES
const dotenv        = require('dotenv');

const app = express();

dotenv.config();

//CONNECT TO DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true } ,
    () => console.log("Connected to DB")
    );

//MIDDLEWARES
app.use(express.json());

//ROUTE MIDDLEWARES
app.use('/api/user', authRoutes);
app.use('/api/posts', postRoutes);


app.listen(3200, () => console.log("Server Up and Running"));