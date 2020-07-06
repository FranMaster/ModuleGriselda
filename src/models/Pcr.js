const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Pcr = new Schema({
    nombreDelPunto: { type: String, unique: true },
    numeroTelefeno: { type: String, unique: true },
    pin: { type: String },
    usuariosAsignados: { type: Array },
    direccion: { type: String }

});

module.exports = Pcr
