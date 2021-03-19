import User from '../models/user.model';
import TicketModel from '../models/ticket.model';

// Get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();

        if (users) {
            res.json(users);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get single user by ID
exports.getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const userFound = await User.findById(id);

        if (userFound) {
            res.json(userFound);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get user by email
exports.getUserByEmail = async (req, res) => {
    try {
        const email = req.body.email;
        const user = await User.findOne({ email });

        if (user) {
            res.json(user);
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Send user infos was logged by token
exports.getUser = async (req, res) => {
    res.json({ user: req.user })
};

// Add a new user
exports.addUser = async (req, res) => {
    try {
        const user = new User(req.body);
        const result = await user.save();

        if (result) {
            res.status(201).json({
                message: `New user ${user.name} created with success`,
            });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update user
exports.updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userFound = await User.findById(id).exec();

        if (!userFound) {
            return res.status(404).json({ message: `User ${id} not found` });
        }

        const updateData = req.body;
        updateData.date_updated = new Date();

        const update = await User.updateOne({ _id: id }, updateData);

        if (update) {
            res.json({ message: `User ${id} updated with success` });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete user
exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userFound = await User.findById(id).exec();

        if (!userFound) {
            return res.status(404).json({ message: `User ${id} not found` });
        }

        const userDeleted = await User.deleteOne({ _id: id });

        if (userDeleted) {
            res.json({ message: `User ${id} has been deleted with success` });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

/** Get all tickets by user */
exports.getTicketsByUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const tickets = await TicketModel.find({user_id: userId}).exec();
        if (!tickets) {
            res.status(404).json({ message: `Tickets not found from ${userId} user` });
        }
        res.status(200).json(tickets);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

/** Get number of total users customer */
exports.getUsersCustomer = async (req, res) => {
    try {
        const totalUsersCustomer = await User.where({ role: 'customer' }).countDocuments();
        res.status(200).json(totalUsersCustomer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
