import uuid from "uuid";
import { sessionsCollection } from "../database/db.js";

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
