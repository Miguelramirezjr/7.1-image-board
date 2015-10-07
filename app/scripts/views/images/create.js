import BaseView from 'views/base-view';

var CreateImageView = BaseView.extend({

  tagName: 'form',
  className: 'create-image',

  template: JST['images/create'],

  events: {
    'submit': 'createImage'
  },

  createBook: function(e) {
    e.preventDefault();
    this.collection.create(this.serializeForm());
    this.$('input[type=text]').val("");
  }
});

export default CreateImageView;
