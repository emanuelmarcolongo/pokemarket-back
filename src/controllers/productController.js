import { productsCollection } from "../database/db.js";

export async function getProducts(req, res) {
    
    try {
      const products = await productsCollection.find({}).toArray()
      res.send(products);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
