import { sessionsCollection } from "../database/db.js";


export async function getProductsValidation (req, res, next) {
    const {authorization} = req.headers;
  
    const token = authorization.replace("Bearer ", "");

    const user = await sessionsCollection.findOne({token: token});

    try {
        if (!authorization) {
            return res.status(401).send("Headers authorization inválido")
        }
    
        if (!user) {
            return res.status(401).send("Token inválido")
        }
    } catch (e) {
        res.sendStatus(500)
    }

    next();
}