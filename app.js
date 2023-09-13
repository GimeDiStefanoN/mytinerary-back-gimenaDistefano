import 'dotenv/config.js';
import './config/db.js'; //siempre desp del dotenv

import express from "express";
import morgan from 'morgan';
import cors from 'cors';

import indexRouter from './router/index.router.js';
import {notFound, errorHandler} from './middlewares/errors.js';

const app = express();
const PORT = process.env.PORT || 3000;


//midlwares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(cors());
app.use((req, res, next)=>{
    console.log('se ejecuta middleware');
    next()
})
app.use('/api', indexRouter);

app.use(notFound);
app.use(errorHandler);

app.use((err,req,res,next)=>{
    console.log(err.stack)
    res.status(500).send('Error  connecting with server!');
})

app.listen(PORT, ()=> console.log('servidor corriendo en puerto ' +  PORT));