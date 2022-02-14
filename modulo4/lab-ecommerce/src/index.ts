import app from "./app";
import createUsers from "./endpoints/createUsers";
import getAllUsers from "./endpoints/getUsers";
import createProduct from "./endpoints/createProduct";
import getAllProducts from "./endpoints/getProducts";

app.post('/users/create', createUsers);
app.get('/users', getAllUsers);
app.post('/products', createProduct);
app.get('/products', getAllProducts);