const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: { type: String, unique: true, lowercase: false },
    displayName: String,
    avatar: String,
    password: { type: String, select: false },
    signUpDate: { type: Date, default: Date.now() },
    lastLogin: Date
});

module.exports = UserSchema
