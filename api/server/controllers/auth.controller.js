import User from '../models/user.model';
import auth from '../helpers/auth.helper';

/* ----------------------------- Authentication ----------------------------- */

exports.signup = async (req, res) => {
    try {
        // const user = new User(req.body);
        console.log(auth.standard());

    } catch (error) {
        console.log('ERROR signUp', error);
    }
};

exports.login = async (req, res) => {
    res.send('Logging...');
};

exports.google = async (req, res) => {
    res.send('Login by google');
};

exports.facebook = async (req, res) => {
    res.send('Login by facebook');
};
