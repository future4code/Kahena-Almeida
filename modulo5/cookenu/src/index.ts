import { app } from './app'
import { signup } from './endpoints/signup'
import { login } from './endpoints/login'

app.post('/user', signup)
app.post('/user/login', login)
