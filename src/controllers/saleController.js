import { salesCollection } from "../database/db.js";

export async function postSale (req, res) {

    const {name, email, products, adress, paymentMethod} = req.body;

    try {
        await salesCollection.insertOne({
            name,
            email,
            products,
            adress,
            paymentMethod
        })
        res.sendStatus(201)
    } catch (e) {
        console.log(e);
        return res.sendStatus(500);
    }



}