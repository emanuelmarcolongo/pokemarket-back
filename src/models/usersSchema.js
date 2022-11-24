import joi from 'joi'

export  const usersSchema = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().min(3).email().required(),
    password: joi.required()
})