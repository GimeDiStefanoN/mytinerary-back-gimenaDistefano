// todas las rutas relacionadas con ciudades
import express from 'express';
import cityController from '../controllers/city.controller.js';


const router = express.Router();
const {getCities, createCity, getCityById, updateCity, deleteCity} = cityController;

router.get('/', getCities)
router.get('/:id', getCityById)
router.put('/:id', updateCity) //modificar
router.delete('/:id', deleteCity) //eliminar
router.post('/', createCity) //crear

export default router;