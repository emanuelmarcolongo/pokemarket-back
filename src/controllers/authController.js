import { v4 as uuid } from "uuid";
import { sessionsCollection, usersCollection } from "../database/db.js";

export async function postSignIn(req, res) {
  const user = res.locals.user;
  const token = uuid();

  try {
    await sessionsCollection.insertOne({
      token,
      user: user._id,
    });
    res.send({ token });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export async function postSignUp(req, res) {
  const newUser = res.locals.user;

  const passwordHash = bcrypt.hashSync(newUser.password, 10);

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
