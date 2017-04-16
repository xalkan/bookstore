var myApp = angular.module('myApp');

myApp.controller('BooksController', ["$scope", "$http", "$location", "$routeParams", function ($scope, $http, $location, $routeParams) {
	// body...
	console.log('Books controller loaded');
	$scope.getBooks = function () {
		// body...
		$http.get('/api/books').then(function (response) {
			// body...
			$scope.books = response.data;
		})
	}

	$scope.getBook = function () {
		// body...
		var id = $routeParams.id;
		$http.get('/api/books/' + id).then(function (response) {
			// body...
			$scope.book = response.data;
		})
	}

	$scope.addBook = function () {
		// body...
		$http.post('/api/books/', $scope.book).then(function (response) {
			// body...
			window.location.href='#!/books';
		});
	}

	$scope.updateBook = function () {
		// body...
		var id = $routeParams.id;
		$http.put('/api/books/' + id, $scope.book).then(function (response) {
			// body...
			window.location.href= '#!/books';
		});
	}

	$scope.deleteBook = function(id){
		// body...
		$http.delete('/api/books/' + id).then(function (response) {
			// body...
			window.location.href = "#!/books"
		})
	}

}]);
