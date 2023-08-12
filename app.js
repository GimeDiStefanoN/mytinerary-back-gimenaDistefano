//import 'dotenv/config.js';
import './config/db.js'; //siempre desp del dotenv

import express from "express";
import morgan from 'morgan';
import cors from 'cors';

import indexRouter from './router/index.router.js';

const app = express();
const PORT = 8000
//process.env.PORT

//midlwares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(cors());
app.use('/api', indexRouter);



app.listen(PORT, ()=> console.log('servidor corriendo en puerto ' +  PORT));