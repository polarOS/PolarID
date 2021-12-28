const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: String,
    discriminator: String,
    avatar: String,
    language: String,
    email: String,
    discordId: String,
    createdAt: String,
    polarStore: Object
});

module.exports = model('User', userSchema);