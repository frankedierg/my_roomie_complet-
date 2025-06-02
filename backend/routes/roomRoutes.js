const express = require('express');
const router = express.Router();
const {
  createRoom,
  getRooms,
  deleteRoom,
  updateRoom
} = require('../controllers/roomController');

router.post('/', createRoom);
router.get('/', getRooms);
router.delete('/:id', deleteRoom);
router.put('/:id', updateRoom);


module.exports = router;
