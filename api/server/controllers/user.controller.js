import User from '../models/user.model';

// Get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();

        if (users) {
            res.json(users);
        }
    } catch (error) {
        res.status(400).json({message: error.message});
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
        res.status(400).json({message: error.message});
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

// Add a new user
exports.addUser = async (req, res) => {
    try {
        const user = new User(req.body);
        const result = await user.save();

        if (result) {
            res.status(201).json({ message: `New user ${user.name} created with success` });
        }

    } catch (error) {
        res.status(400).json({message: error.message});
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
        res.status(400).json({message: error.message});
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
        res.status(400).json({message: error.message});
    }
};
