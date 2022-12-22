const mongoose = require('mongoose');

const AnimaisSchema = new mongoose.Schema({

    nome:{
        type: String,
        required: true
    },
    raça: {
        type: String,
        required: true
    },
    caracteristicas:{
        type: String,
        required: false
    },
    porte_do_animal:{
        type: String,
        required: true
    },
    ong:{
        type:String,
        required: true,

    },
    telefone:{
        type: Number,
        required: true
    }
    
});

module.exports = mongoose.model('Animais', AnimaisSchema);