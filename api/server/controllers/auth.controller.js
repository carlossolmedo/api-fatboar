import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { tokenSecret } from '../config/config';
import User from '../models/user.model';

/* ----------------------------- Authentication ----------------------------- */

exports.signup = async (req, res) => {
    try {
        const user = new User({
            gender: req.body.gender,
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, 10),
            email: req.body.email,
            postal_code: req.body.postal_code,
            country: req.body.country,
            newsletter: req.body.newsletter,
            role: req.body.role,
            last_connection: '',
            date_updated: ''
        });

        const result = await user.save();

        if (result) {
            res.status(201).json({ message: `Account created with success` });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const userFound = await User.findOne({ email: email }).exec();
        const passwordIsValid = bcrypt.compareSync(
            password,
            userFound.password
        );

        if (!userFound) {
            return res.status(404).json({ message: `User ${email} not found` });
        }

        if (!passwordIsValid) {
            return res
                .status(401)
                .json({ accessToken: null, message: 'Invalid password !' });
        }

        // if everything is valid
        const token = jwt.sign({ userId: userFound._id, username: userFound.username }, tokenSecret, {
            expiresIn: 86400,
        }); // expire in 24 hours

        userFound.last_connection = Date.now();
        userFound.save();

        res.status(200).json({ accessToken: token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.logout = async (req, res) => {
    res.json({ status: 'OK' });
};

exports.google = async (req, res) => {
    res.send('Login by google');
};

exports.facebook = async (req, res) => {
    res.send('Login by facebook');
};
