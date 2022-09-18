import { RequestHandler } from 'express';
import User from '../models/models';

interface IDataModel {
    user: string;
}

export const postController: RequestHandler = async (req, res, next) => {
    const { user } = req.body as IDataModel;
    const currUser = await User.findOne({ where: { user } });
    // some code ... try/catch ... other
    res.status(201).send({ message: 'User was created' });
};

export const getController: RequestHandler = async (req, res, next) => {
    // findOne or findAll user and etc..  some code
    res.status(200).send({ users: ['array of result'] });
};

export const patchController: RequestHandler = async (req, res, next) => {
    // some code
};

export const deleteController: RequestHandler = async (req, res, next) => {
    // some code
};
