// todas las rutas relacionadas con ciudades
import express from 'express';
import cityController from '../controllers/city.controller.js';


const router = express.Router();



router.get('/', cityController.getCities)

export default router;