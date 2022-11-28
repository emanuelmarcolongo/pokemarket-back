import { salesCollection } from "../database/db.js";

export async function postSale(req, res) {
  const newSale = req.body;

  try {
    await salesCollection.insertOne(newSale);
    res.sendStatus(201);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
}

export async function getSale(req, res) {
  const user = res.locals.user;
  try {
    const sales = await salesCollection.find({ email: user.email }).toArray();
    res.send(sales)
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
