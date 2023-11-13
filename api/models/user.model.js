import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
    },
    avatar: {
        type: String,
        default: "https://images.hdqwalls.com/wallpapers/demon-slayer-samurai-anime-girl-4k-kd.jpg",
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;