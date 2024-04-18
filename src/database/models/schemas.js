const mongoose = require('mongoose');

const userinfo = new mongoose.Schema({
    user: { type: String, required:true },
    nick: { type: String, required: true },
    level: { type: Number, required: true },
    prestige: { type: Number, required: true },
    kills: { type: Number, required: true },
    dmt: { type: String, required: true },
    titan: { type: String, required: true },
    hora: { type: String, required: true },
});

module.exports = mongoose.model('User', userinfo);