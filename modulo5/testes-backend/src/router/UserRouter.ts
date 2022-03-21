import express from 'express'
import { UserDatabase } from '../data/UserDatabase'

export const userRouter = express.Router()

userRouter.get('/users/profile/:id', getUserById)
