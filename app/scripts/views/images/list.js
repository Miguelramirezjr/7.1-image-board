import CollectionView from 'views/collection-view';
import ImageItemView from 'views/images/item';

export default CollectionView.extend({
  tagName: "ul",

  render: function(){
    this.renderChildren();
    return this;
  },

  renderChildren: function(){
    var self = this;
    this.$el.html('');
    this.collection.each(function(image){
      var itemView = new ImageItemView({model: image});
      self.$el.append(itemView.render().el);
    });
  }
});
