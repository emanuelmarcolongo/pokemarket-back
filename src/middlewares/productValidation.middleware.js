

export async function getProductsValidation (req, res, next) {
    const {authorization} = req.headers;
  
    if (!authorization) {
        return res.status(401).send("Headers authorization inválido")
    }

    next();
}