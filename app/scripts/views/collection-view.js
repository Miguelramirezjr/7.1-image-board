import BaseView from 'views/base-view';

export default BaseView.extend({

  initialize: function() {
    this.listenTo(this.collection, 'add remove', this.render);
  },

});
