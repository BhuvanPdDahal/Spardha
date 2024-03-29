import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    joinedAt: {
        type: Date,
        default: new Date()
    }
});

const User = mongoose.model('User', UserSchema);
export default User;