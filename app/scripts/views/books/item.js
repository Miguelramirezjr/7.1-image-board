import BaseView from 'views/base-view';

export default BaseView.extend({
  tagName: 'li',
  template: JST['books/item'],

  events: {
    'click [data-behavior=destroy-book]': 'destroy'
  },

  destroy: function(){
    this.model.destroy();  
  },

  render: function(){
    this.$el.html(this.template({
      model: this.model.toJSON()
    }));
    return this;
  }
});
