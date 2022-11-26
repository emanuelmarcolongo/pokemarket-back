import joi from 'joi'

export  const saleSchema = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().min(3).email().required(),
    products: joi.array().required(),
    adress: joi.required(),
    paymentMethod: joi.string().required(),
    total: joi.required(),
    time: joi.required()
})