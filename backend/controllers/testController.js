// Controlador de prueba
const getTest = (req, res) => {
    res.json({
        mensaje: '✅ Controlador funcionando desde /api/test',
        status: 'ok'
    });
};

module.exports = { getTest };