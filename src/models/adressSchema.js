import joi from 'joi'

export  const adressSchema = joi.object({
    cidade: joi.string().required(),
    estado: joi.string().required(),
    cep: joi.number().required(),
    rua: joi.string().required(),
    numero: joi.number().required()
})