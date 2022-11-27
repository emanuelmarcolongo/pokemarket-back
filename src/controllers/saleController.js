import { salesCollection } from "../database/db.js";

export async function postSale(req, res) {
  const { name, email, products, adress, paymentMethod } = req.body;

  try {
    await salesCollection.insertOne({
      name,
      email,
      products,
      adress,
      paymentMethod,
    });
    res.sendStatus(201);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
}

export async function getSale(req, res) {
    const user = res.locals.user
  try {
    const sales = await salesCollection.find({email: user.email}).toArray();
    res.send(sales)
  } catch (e) {
    console.log("erro aqui");
    res.sendStatus(500);
  }
}
