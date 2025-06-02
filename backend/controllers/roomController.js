const Room = require('../models/Room');

// Crear habitación
const createRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body); // req.body incluye imageUrl
    res.status(201).json(room);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Obtener todas las habitaciones
const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar habitación
const updateRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // devuelve el documento actualizado
    );
    if (!room) return res.status(404).json({ error: 'Habitación no encontrada' });
    res.status(200).json(room);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Eliminar habitación
const deleteRoom = async (req, res) => {
  try {
    const deleted = await Room.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Habitación no encontrada' });
    res.status(200).json({ message: 'Habitación eliminada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createRoom,
  getRooms,
  updateRoom,
  deleteRoom
};
