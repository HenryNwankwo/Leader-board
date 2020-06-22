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
        
    },
    password: {
        type: String,
        required: true,
        minlength: 7,           
    },    
    
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
 