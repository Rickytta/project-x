/* eslint-disable class-methods-use-this */
/* eslint-disable consistent-return */
import Joi from 'joi';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import users from '../models/users';
import { signupValidation, signinValidation } from '../helpers/validate';

class User {
    /**
     *
     * @param {login user} req
     * @param {*token on success} res
     */


    // eslint-disable-next-line consistent-return
    async signup(req, res) {
        const {
            error,
        } = Joi.validate(req.body, signupValidation);
        if (error) {
            const errorMessage = error.details[0].message;
            return res.status(400).json({
                status: 400,
                error: errorMessage,
            });
        }
        const emailFound = users.find(c => c.email === req.body.email);
        if (emailFound) {
            return res.status(409).json({
                status: 409,
                error: 'Email Exists',
            });
        }
        const newUser = {
            id: users.length + 1,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            address: req.body.address,
            password: bcrypt.hashSync(req.body.password, 10),
            is_admin: false,
        };

        users.push(newUser);
        delete newUser.password;

        jwt.sign({
                    id: newUser.id,
                    email: newUser.email,
                    admin: newUser.is_admin,
                }, 'secretKey', {}
            }
            (_err, token) => {
                newUser.token = token;
                return res.status(201).json({
                    status: 201,
                    data: newUser,
                });
            };
    }


    async login(req, res) {
        const {
            error,
        } = Joi.validate(req.body, signinValidation);
        if (error) {
            const errorMessage = error.details[0].message;
            return res.status(400).json({
                status: 400,
                error: errorMessage,
            });
        }
        const userEmail = req.body.email;
        const userPassword = req.body.password;
        const foundUser = users.find(e => e.email === userEmail);

        if (!foundUser) {
            return res.status(401).json({
                status: 401,
                error: 'email does not exist',
            });
        }
        const pass = bcrypt.compareSync(userPassword, foundUser.password);
        if (pass) {
            delete foundUser.password;

            jwt.sign({
                id: foundUser.id,
                email: foundUser.email,
                admin: foundUser.is_admin,
            }, 'secretKey', {
                expiresIn: '24h',
            }, (err, token) => {
                foundUser.token = token;
                return res.status(200).json({
                    status: 200,
                    data: foundUser,
                });
            });
        } else {
            return res.status(401).json({
                status: 401,
                message: 'invalid credential',
            });
        }
    }
}

export default User;