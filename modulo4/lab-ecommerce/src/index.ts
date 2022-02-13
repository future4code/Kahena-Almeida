import app from "./app";
import createUsers from "./endpoints/createUsers";
import getAllUsers from "./endpoints/getUsers";
import createProducts from "./endpoints/createProducts";

app.post('/users/create', createUsers);
app.get('/users', getAllUsers);
app.post('/products/create', createProducts);