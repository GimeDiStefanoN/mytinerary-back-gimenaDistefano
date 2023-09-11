import express from 'express';
import activityController from '../controllers/activity.controller.js';

const router = express.Router();
const { getActivities, createActivity } = activityController;

router.get('/', getActivities)
router.post('/', createActivity)

export default router;