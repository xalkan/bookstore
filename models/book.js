var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
	title:{
		type: String
	},
	genre:{
		type: String
	},
	description:{
		type: String
	},
	author:{
		type: String
	},
	publisher:{
		type: String
	},
	pages:{
		type: Number
	},
	image:{
		type: String
	}
});

var Book = module.exports = mongoose.model('Book', bookSchema);

// Get books
module.exports.getBooks = function (callback, limit) {
	// body...
	Book.find(callback).limit(limit);
}

// Get a book by _id
module.exports.getBookById = function (id, callback) {
	// body...
	Book.findById(id, callback);
}

// Add book
module.exports.addBook = function (book, callback) {
	// body...
	Book.create(book, callback);
}

// Update book
module.exports.updateBook = function (id, book, options, callback) {
	// body...
	var query = { _id: id };
	var updatedBook = {
		title: book.title,
		genre: book.genre,
		description: book.description,
		author: book.author,
		publisher: book.publisher,
		pages: book.pages,
		image: book.image
	};

	Book.findOneAndUpdate(query, updatedBook, options, callback);
}

// Delete Book
module.exports.deleteBook = function (id, callback) {
	// body...
	var query = { _id: id };

	Book.remove(query, callback);
}