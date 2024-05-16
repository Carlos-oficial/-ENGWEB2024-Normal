const mongoose = require('mongoose')
var Contrato = require("../models/contrato")

module.exports.list = () => {
    return Contrato
        .find()
        .exec()
}

module.exports.findById = id => {
    return Contrato
        .findOne({ idcontrato: Number(id) })
        .exec()
}

module.exports.listComEntidade = entidade => {
    return Contrato
        .find({ entidade_comunicante: entidade })
        .exec()
}

module.exports.listComTipo = tipo => {
    return Contrato
        .find({ tipoprocedimento: tipo })
        .exec()
}

module.exports.listEntidades = () => {
    return Contrato
        .distinct("entidade_comunicante")
        .sort()
        .exec()
}

module.exports.listTipos = () => {
    return Contrato
        .distinct("tipoprocedimento")
        .sort()
        .exec()
}

module.exports.remove = id => {
    return Contrato
        .findOneAndDelete({idcontrato : id})
}

module.exports.update = (id, contrato) => {
    return Contrato
        .findByIdAndUpdate(id, contrato, {new : true})
}

module.exports.insert = contrato => {
    if((Contrato.find({idcontrato : contrato.idcontrato}).exec()).length != 1){
        var newContrato = new Contrato(contrato)
        return newContrato.save()
    }
}