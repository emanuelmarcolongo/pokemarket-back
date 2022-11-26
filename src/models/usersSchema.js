import joi from 'joi'

export  const usersSchema = joi.object({
    name: joi.string().min(3).required(),
    url: joi.required(),
    email: joi.string().min(3).email().required(),
    password: joi.required(),
    adress: joi.object({
        city: joi.string().required(),
        state: joi.string().required(),
        CEP: joi.number(),
        street: joi.string().required(),
        number: joi.number()
    })
})