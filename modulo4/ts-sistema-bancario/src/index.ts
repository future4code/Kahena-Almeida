import express, { Request, Response } from "express"
import { AddressInfo } from "net";

const app = express();
app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

app.post("/register", (req: Request, res: Response) => {
  try {
    const name = req.body.name
    const price = req.body.price

    if (!name || !price) {
      throw new Error("Um ou mais campos faltando: 'name', 'price'")
    }

    if (typeof name !== "string") {
      throw new Error("O campo 'name' deve ser uma string")
    }

    if (typeof price !== "number" || price <= 0) {
      throw new Error("O campo 'price' deve ser um number e maior que zero")
    }

    const newProduct: Product = {
      id: Date.now().toString(),
      name,
      price
    }

    products.push(newProduct)

    res.send(products)

  } catch (error: any) {
    switch (error.message) {
      case "Um ou mais campos faltando: 'name', 'price'":
        res.status(422)
        break
      case "O campo 'name' deve ser uma string":
        res.status(422)
        break
      case "O campo 'price' deve ser um number maior que zero":
        res.status(422)
        break
      default:
        res.status(500)
    }

    res.send(error.message || "Erro inesperado")
  }
})