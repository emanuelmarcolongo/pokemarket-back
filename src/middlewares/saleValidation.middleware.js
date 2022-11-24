import { sessionsCollection } from "../database/db.js";
import { saleSchema } from "../models/saleSchema.js";


export async function postSaleValidation (req, res, next) {

    const body = req.body;
    const {authorization} = req.headers;
  
    const token = authorization?.replace("Bearer ", "");

    const user = await sessionsCollection.findOne({token: token});

    const validation = saleSchema.validate(body, { abortEarly: false });

    if (validation.error) {
        const errors = validation.error.details.map((detail) => detail.message);
        return res.status(400).send({ message: errors });
    }  
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

    res.locals.user = user;
    next();
}