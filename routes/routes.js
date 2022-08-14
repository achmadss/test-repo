const express = require("express")

const Routes = express.Router()
const userRepository = require("../repositories/UserRepository")

// default route
Routes.get('/', (req, res) => {
    res.send('Hello World')
})

// route get all users
Routes.get('/users', userRepository.findAll)

// route get user by id
Routes.get('users/:id', userRepository.findOne)

// route create new user
Routes.post('/users', userRepository.create)

export { Routes }