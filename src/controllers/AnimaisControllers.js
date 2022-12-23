const mongoose = require("mongoose")
const Animais = require("../models/AnimaisSchema")


const showAnimais = async (request, response) => {
    const animais = await Animais.find()
    return response.status(200).json(animais)
}

const showAnimaisNome = async (request, response) => {
    const { nome } = request.query;

    let query = { };

    if(nome) query.nome = new RegExp(nome, "i")

    try{
        const animais = await Animais.find(query)
        response.status(200).json(animais)
    }catch(error){
        response.status(500).json({
            message: "Animal não encontrado em nosso sistema"
        })
    }
}

const showAnimaisId = async (request, response) => {
    try{
        const animais = await Animais.findById(request.params.id)
        response.status(200).json(animais)
    }catch(error){
        response.status(500).json({
            message: "Animal não encontrado em nosso sistema"
        })
    }
}

const createAnimais = async (request, response) =>{
    const animal = new Animais({
        _id: new mongoose.Types.ObjectId(),
        nome: request.body.nome,
        raça: request.body.raça,
        porte_do_animal: request.body.porte_do_animal,
        ong: request.body.ong,
        telefone: request.body.telefone,

        }) 
        

       try{
        const newAnimais = await animal.save()
        return response.status(201).json(newAnimais)
    }catch(error){
        return response.status(400).json({
            message: error.message
        })
    }}

const replaceAnimais = async (request, response) => {
        const animais = await Animais.findById(request.params.id)

        if(animais == null){
            return response.status(404).json({
                message: "Animal não encontrado"
            })
        }

        if(request.params.id != null){
            animais.nome = request.body.nome,
            animais.telefone = request.body.telefone
        }

        try{
            const adjusteAnimais = await animais.save()
            return response.status(200).json({adjusteAnimais})
        }catch(error){
            response.status(500).json({
                message: error.message
            })
        }
}

const deleteAnimais = async (request, response) => {
        const animais = await Animais.findById(request.params.id)
        if(animais == null){
            return response.status(404).json({
                message: "Animais não encontrados"
            })
        }

        try{
            await animais.remove()
            response.status(200).json({
                message: "Animal deletado com sucesso!"
            })
        }catch(error){
            return response.status(500).json({
            message: error.message
           })
        }
}

module.exports = {
    showAnimais,
    showAnimaisNome,
    showAnimaisId,
    createAnimais,
    replaceAnimais,
    deleteAnimais,

}