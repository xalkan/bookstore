var mongoose = require('mongoose');

var genreSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	createDate: {
		type: Date,
		default: Date.now
	}

});

var Genre = module.exports = mongoose.model("Genre", genreSchema);

// Get Genres
module.exports.getGenres = function (callback, limit) {
	Genre.find(callback).limit(limit);
}

// Add Genre
module.exports.addGenre = function (genre, callback) {
	Genre.create(genre, callback);
}

// Update Genre
module.exports.updateGenre = function (id, genre, options, callback) {
	var query = { _id: id };
	var updatedGenre = {
		name: genre.name
	};

	Genre.FindOneAndUpdate(query, updatedGenre, options, callback);
}

// Delete Book
module.exports.deleteGenre = function (id, callback) {
	// body...
	var query = { _id: id };

	Genre.remove(query, callback);
}



