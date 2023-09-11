import express from 'express';
import itineraryController from '../controllers/itinerary.controller.js';

const router = express.Router();
const { getItineraries, getItinerariesbyCityId, getItinerariesbyId, createItinerary, updateItinerary, deleteItinerary  } = itineraryController;

router.get('/', getItineraries) //consultar todos
//router.get('/:id', getItinerariesbyCityId) //consultar por ID de ciudad
router.get('/:id', getItinerariesbyId) //consultar por id
router.post('/', createItinerary) // crear
router.put('/:id', updateItinerary) //modificar
router.delete('/:id', deleteItinerary) //eliminar

export default router;