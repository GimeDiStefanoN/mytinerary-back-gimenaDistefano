// todas las rutas relacionadas con ciudades
import express from 'express';
import cityController from '../controllers/city.controller.js';
import { postCity } from "../middlewares/middleware.js";
import { isAdmin } from '../middlewares/isAdmin.middleware.js';
import passport from '../middlewares/auth/passport.js';



const router = express.Router();
const {getCities, createCity, getCityById, updateCity, deleteCity} = cityController;



router.get('/', getCities)
router.get('/:id', getCityById)
router.put('/:id', isAdmin, updateCity) //modificar
router.delete('/:id', isAdmin ,deleteCity) //eliminar
router.post('/', passport.authenticate('jwt', {session: false}),isAdmin, postCity, createCity) //crear

export default router;