import CollectionView from 'views/collection-view';
import BookItemView from 'views/books/item';

export default CollectionView.extend({
  tagName: "ul",

  render: function(){
    this.renderChildren();
    return this;
  },

  renderChildren: function(){
    var self = this;
    this.$el.html('');
    this.collection.each(function(book){
      var itemView = new BookItemView({model: book});
      self.$el.append(itemView.render().el);
    });
  }
});
