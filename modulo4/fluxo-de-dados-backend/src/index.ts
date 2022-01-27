import express from "express";
import { AddressInfo } from "net";
import { Product, products } from "./data"

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

//Exercício 1

app.get("/test", (req, res) => {
  res.send("Está online!")
})

// Exercício 3
app.post("/products", (req, res) => {
    const name = req.body.name
    const price = req.body.price

    if (!name || !price) {
     return res.status(422).send("Um ou mais campos faltando!")
    }

    if (typeof name !== "string") {
     return res.status(409).send("O campo 'name' deve ser uma string!")
    }

    if (typeof price !== "number" || price <= 0) {
     return res.status(409).send("O campo 'price' deve ser um number e maior que zero")
    }

    const newProduct: Product = {
      id: Date.now().toString(),
      name,
      price
    }

    products.push(newProduct)
    res.send({products})
    console.log(newProduct)
})

// Exercício 4
app.get("/products", (req, res) => {
  try {
    res.send(products)

  } catch (error: any) {
    res.status(500).send("Erro inesperado.")
  }
})

// Exercício 5
app.put("/products/:id", (req, res) => {
  try {
    const id = req.params.id
    const newPrice = req.body.price

    if (!newPrice && newPrice !== 0) {
      throw new Error("Path param faltando: 'price'")
    }

    if (typeof newPrice !== "number" || newPrice <= 0) {
      throw new Error("O path param 'price' deve ser um number e maior que zero")
    }

    let isProductFound = false

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        products[i].price = newPrice
        isProductFound = true
      }
    }

    if (!isProductFound) {
      throw new Error("Produto não encontrado")
    }

    res.send(products)

  } catch (error: any) {
    res.send(error.message || "Erro inesperado")
  }
})