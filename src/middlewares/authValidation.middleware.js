import usersCollection from "../database/db.js";
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

    res.locals.user
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
