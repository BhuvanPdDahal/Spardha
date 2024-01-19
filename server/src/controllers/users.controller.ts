import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User';

export const signup = async (req: any, res: any) => {
    try {
        const { fullName, email, password } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: "User with this email already exists" });
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await User.create({ fullName, email, password: hashedPassword });
        const token = jwt.sign({ email, id: newUser._id }, process.env.SECRET_KEY || '');
        res.status(200).json({ user: newUser, token });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const login = async (req: any, res: any) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });
        const passwordIsMatching = await bcrypt.compare(password, user.password);
        if (!passwordIsMatching) return res.status(400).json({ message: "Password is not matching" });
        const token = jwt.sign({ email, id: user._id }, process.env.SECRET_KEY || '');
        res.status(200).json({ user, token });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const loginWithToken = async (req: any, res: any) => {
    try {
        const { userId } = req;
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });
        const token = jwt.sign({ email: user.email, id: user._id }, process.env.SECRET_KEY || '');
        res.status(200).json({ user, token });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};