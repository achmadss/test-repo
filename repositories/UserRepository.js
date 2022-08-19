import { BaseResponse } from "../models/responses/BaseResponse.js";
import { User } from "../models/User.js";

export const createUser = async (req, res) => {
    try {
        let newUser = await User.create(req.body)
        res.status(200).json(
            new BaseResponse(
                res.statusCode,
                "success",
                [newUser]
            )
        )
    } catch (error) {
        res.status(500).json(
            new BaseResponse(
                res.statusCode,
                String(error),
                []
            )
        )
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.status(200).json(
            new BaseResponse(
                res.statusCode,
                "success",
                users
            )
        )
    } catch (error) {
        res.status(500).json(
            new BaseResponse(
                res.statusCode,
                String(error),
                []
            )
        )
    }
}

export const getUser = async (req, res) => {
    try {
        const users = await User.findAll(
            {
                where: {
                    id: req.params.id
                }
            }
        )
        res.status(200).json(
            new BaseResponse(
                res.statusCode,
                "success",
                users
            )
        )
    } catch (error) {
        res.status(500).json(
            new BaseResponse(
                res.statusCode,
                String(error),
                []
            )
        )
    }
}

export const updateUser = async (req, res) => {

}

export const deleteUser = async (req, res) => {

}

export const deleteAllUsers = async (req, res) => {

}