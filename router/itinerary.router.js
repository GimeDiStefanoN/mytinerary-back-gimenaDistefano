import express from 'express';
import itineraryController from '../controllers/itinerary.controller.js';

const router = express.Router();
const { getItineraries, createItinerary } = itineraryController;

router.get('/', getItineraries)
router.post('/', createItinerary)

export default router;