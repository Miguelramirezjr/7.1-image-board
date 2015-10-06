import BaseView from 'views/base-view';

var CreateBookView = BaseView.extend({

  tagName: 'form',
  className: 'create-book',

  template: JST['books/create'],

  events: {
    'submit': 'createBook'
  },

  createBook: function(e) {
    e.preventDefault();
    this.collection.create(this.serializeForm());
    this.$('input[type=text]').val("");
  }
});

export default CreateBookView;
