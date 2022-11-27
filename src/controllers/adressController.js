import { v4 as uuid } from "uuid";
import { usersCollection } from "../database/db.js";

export async function putAdress(req, res) {
  const adress = res.locals.adress;
  const user = {...res.locals.user, adress: adress}
  try {
    await usersCollection.updateOne({email: user.email}, {$set: user});
    res.sendStatus(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export async function getAdress(req, res) {
  const { email } = res.locals.user;
  try {
    const users = await usersCollection.findOne({ email });
    res.send(users.adress);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
