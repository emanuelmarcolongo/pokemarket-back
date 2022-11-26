import { v4 as uuid } from "uuid";
import { sessionsCollection, usersCollection } from "../database/db.js";
import bcrypt from "bcrypt";


export async function postSignIn(req, res) {
  const user = res.locals.user;
  const token = uuid();

  try {
    await sessionsCollection.insertOne({
      token,
      user: user._id,
    });
    res.send({ token, name: user.name, email: user.email, url: user.url });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export async function postSignUp(req, res) {
  const newUser = res.locals.user;

  const passwordHash = bcrypt.hashSync(newUser.password, 10);

  delete newUser.passwordCheck;

  try {
    await usersCollection.insertOne({
      ...newUser,
      password: passwordHash,
    });
    res.sendStatus(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
