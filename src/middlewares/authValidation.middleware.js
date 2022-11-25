import {usersCollection} from "../database/db.js";
import {usersSchema} from "../models/usersSchema.js";
import bcrypt from "bcrypt";

export async function singInBodyValidation(req, res, next) {
  const { email, password } = req.body;

  try {
    const userExist = await usersCollection.findOne({ email });
    if (!userExist)
      return res.status(401).send({ message: "Email ou senha invalido" });

    const passwordOk = bcrypt.compareSync(password, userExist.password);
    if (!password)
      return res.status(401).send({ message: "Email ou senha inválido" });

    res.locals.user = userExist;
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }

  next();
}

export async function signUpBodyValidation(req, res, next) {
  const user = req.body;

  const { error } = usersSchema.validate(user, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).send({ message: errors });
  }

  try {
    const nameExists = await usersCollection.findOne({ name: user.name });
    if (nameExists) {
      return res
        .status(409)
        .send({ message: "Nome de usuário existente!" });
    }

    const emailExists = await usersCollection.findOne({ email: user.email });
    if (emailExists) {
      return res
        .status(409)
        .send({ message: "Existe um usuario com esse email" });
    }
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }

  res.locals.user = user;
  next()
}
