import BooksCollection from 'models/books-collection';
import CreateBookView from 'views/books/create';
import BooksListView from 'views/books/list';

$(document).ready(function(){
  var books = new BooksCollection();

  var createBookView = new CreateBookView({collection: books});
  $('#container').append(createBookView.render().el);

  var booksListView = new BooksListView({collection: books});
  $('#container').append(booksListView.render().el);

  // Emulate a fetch
  books.add([
    {title: "JavaScript: The Good Parts", author: "Douglas Crokford"},
    {title: "Practical Object Oriented Design in Ruby", author: "Sandi Metz"}
  ]);

});
