import { app } from './app'
import { signup } from './endpoints/signup'
import { login } from './endpoints/login'
import { getAllUsers } from './endpoints/getAllUsers'

app.get('/users', getAllUsers)
app.post('/user', signup)
app.post('/user/login', login)
