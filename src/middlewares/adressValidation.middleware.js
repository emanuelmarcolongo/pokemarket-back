import { usersCollection } from "../database/db.js";
import { adressSchema } from "../models/adressSchema.js";

export async function adressValidation(req, res, next) {
  const adress = req.body;

  const { error } = adressSchema.validate(adress, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).send({ message: errors });
  }

  res.locals.adress = adress;

  next();
}
