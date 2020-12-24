import bcrypt from 'bcryptjs';
import User from '../models/user.model';
import auth from '../helpers/auth.helper';

/* ----------------------------- Authentication ----------------------------- */

exports.signup = async (req, res) => {
    try {
        const user = new User({
            gender: req.body.gender,
            username: req.body.username,
            password: bcrypt.hashSync(req.body.password, 8),
            email: req.body.email,
            birthdate: req.body.birthdate,
            postal_code: req.body.postal_code,
            country: req.body.country,
            role: req.body.role || 'customer',
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
        const passwordIsValid = bcrypt.compareSync(password, userFound.password);

        if (!userFound) {
            return res.status(404).json({ message: `User ${email} not found` });
        }

        if (!passwordIsValid) {
            return res.status(401).json({accessToken: null, message: 'Invalid password !'});
        }

        userFound.last_connection = Date.now();
        userFound.save();

        res.status(200).json({ message: 'Connection with success'});

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.google = async (req, res) => {
    res.send('Login by google');
};

exports.facebook = async (req, res) => {
    res.send('Login by facebook');
};
