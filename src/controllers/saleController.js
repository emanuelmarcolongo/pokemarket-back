import { salesCollection } from "../database/db.js";

export async function postSale (req, res) {

    const body = req.body;
    console.log(body)

    try {
        await salesCollection.insertOne({body})
        res.sendStatus(201)
    } catch (e) {
        console.log(e);
        return res.sendStatus(500);
    }



}