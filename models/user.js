const mongoose = require('mongoose');

//User database logic
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,        
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,        
    },    
    
}, {
    timestamps: true
});

const User = mongoose.Model('User', userSchema);
module.exports = User;