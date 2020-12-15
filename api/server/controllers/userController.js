import Boom from '@hapi/boom';
import User from '../models/User';

// Get all users
exports.getUsers = async(req, reply) => {
    try {
        const users = await User.find();
        reply.send(users);
    } catch (error) {
        throw Boom.boomify(error);
    }
};

// Get single user by ID
exports.getUserById = async(req, reply) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        reply.send(user);
    } catch (error) {
        throw Boom.boomify(error);
    }
};

// Add a new user
exports.addNewUser = async(req, reply) => {
    try {
        const user = new User(req.body);
        const result = user.save();
        reply.send(result);
    } catch (error) {
        throw Boom.boomify(error);
    }
};

// Update user
exports.updateUser = async(req, reply) => {
    try {
        const id = req.params.id;
        const user = req.body;
        const { ...updateData } = user;
        const update = await User.findByIdAndUpdate(id, updateData, {new: true});

        if (!update) {
            throw createError(404, 'User does not exist.');
        }

        reply.send(update);
    } catch (error) {
        throw Boom.boomify(error);
    }
};

// Delete user
exports.deleteUser = async(req, reply) => {
    try {
        const id = req.params.id;
        const userDeleted = await User.findByIdAndRemove(id);

        if (!userDeleted) {
            throw createError(404, 'User does not exist.');
        }

        reply.send(userDeleted);
    } catch (error) {
        throw Boom.boomify(error);
    }
};
