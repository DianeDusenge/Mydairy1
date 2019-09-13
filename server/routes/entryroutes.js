import express from 'express';
import allEntries from '../controllers/getAll'
import specificentry from '../controllers/specificentry'
import addentry from '../controllers/addentry'

const router = express.Router();



router.get('/api/v1/entries', allEntries);
router.get('/api/v1/entries/:entryId', specificentry);
router.post('/api/v1/entries/', addentry);


export default router;