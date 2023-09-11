import express from 'express';
import userRouter from './user.router.js';
import citiesRouter from './cities.router.js';
import itineraryRouter from './itinerary.router.js';
import activityRouter from './activity.router.js';

const router = express.Router();


router.get('/', (req,res)=>{
    res.send('Hola mundo')
})

router.use('/users', userRouter);
router.use('/cities', citiesRouter);
router.use('/itineraries', itineraryRouter);
router.use('/activities', activityRouter);


export default router;