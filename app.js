var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/bookstore");
var db = mongoose.connection;

Genre = require('./models/genre');
Book = require('./models/book');

app.use(express.static( __dirname + '/client'));
app.use(bodyParser.json());

app.get('/', function(req, res){
	res.send('Hi there');
});

app.get('/api/genres', function(req, res){
	Genre.getGenres(function (err, genres) {
		// body...
		
		if (err){
			throw err;
		}
		
		res.json(genres);

	});

});

app.post('/api/genres', function (req, res) {

	var genre = req.body;

	Genre.addGenre(genre, function (err, genre) {
		// body...
		if (err) {
			throw err;
		}
		res.json(genre);

	});

});

app.put('/api/genres/:_id', function (req, res) {
	
	var id = req.params._id;
	var genre = req.body;

	Genre.updateGenre(id, genre, {}, function (err, genre) {
		// body...
		if (err) {
			throw err;
		}
		res.json(genre);
	
	});

});

app.delete('/api/genres/:_id', function (req, res) {
	var id = req.params._id;

	Genre.deleteGenre(id, function (err, genre) {
		// body...
		if (err) {
			throw err;
		}
		res.json(genre);
	})
});





app.get('/api/books', function (req, res) {
	Book.getBooks(function (err, books) {
		// body...

		if(err) {
			throw err;
		}

		res.json(books);
	
	});

});

app.get('/api/books/:_id', function (req, res) {
	Book.getBookById(req.params._id, function (err, book) {
		// body...
		if (err) {
			throw err;
		}

		res.json(book);

	});

});

app.post('/api/books', function (req, res) {
	var book = req.body;
	Book.addBook(book, function (err, book) {
		// body...
		if (err) {
			throw err;
		}
		res.json(book);
	
	});

});

app.put('/api/books/:_id', function (req, res) {
	var id = req.params._id;
	var book = req.body;

	Book.updateBook(id, book, {}, function (err, book) {
		// body...
		if (err) {
			throw err;
		}
		res.json(book);
	
	});

});

app.delete('/api/books/:_id', function (req, res) {
	var id = req.params._id;

	Book.deleteBook(id, function (err, book) {
		// body...
		if (err) {
			throw err;
		}
		res.json(book);
	
	});

});



app.listen(3000);
console.log("App running on port 3000");