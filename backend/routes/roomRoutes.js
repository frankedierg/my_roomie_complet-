const express = require('express');
const router = express.Router();
const {
  createRoom,
  getRooms,
  deleteRoom
} = require('../controllers/roomController');

router.post('/', createRoom);
router.get('/', getRooms);
router.delete('/:id', deleteRoom);

module.exports = router;
