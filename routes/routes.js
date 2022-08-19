import express from "express"
import { 
    createUser, 
    getAllUsers, 
    getUser,
    updateUser, 
    deleteUser, 
    deleteAllUsers
} from "../repositories/UserRepository.js"

const Routes = express.Router()

// default route
Routes.get('/', (req, res) => {
    res.send('Hello World')
})

// route get all users
Routes.get('/users', getAllUsers)

// route get user by id
Routes.get('users/:id', getUser)

// route create new user
Routes.post('/users', createUser)

export { Routes }