import { BaseResponse } from "../models/responses/BaseResponse.js";
import { User } from "../models/User.js";

exports.create = async (req, res) => {
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

exports.findAll = async (req, res) => {
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

exports.findOne = (req, res) => {
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

exports.update = (req, res) => {

}

exports.delete = (req, res) => {

}

exports.deleteAll = (req, res) => {

}