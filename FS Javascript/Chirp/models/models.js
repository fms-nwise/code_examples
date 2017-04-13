const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
	username: String,
	password: String, //hash created from password
	created_at: {type: Date, default: Date.now}
})

mongoose.model('User', userSchema);

const postSchema = new mongoose.Schema({
	created_by: {type: String, default: 'Guest'},
	created_at: {type: Date, default: Date.now},
	text: String
})

mongoose.model('Post', postSchema);
