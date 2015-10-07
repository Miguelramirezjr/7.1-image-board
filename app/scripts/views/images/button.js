import BaseView from 'views/base-view';


var ButtonView = BaseView.extend({
  template: _.template('<button class="js-toggle-hidden">+</button><form class="drop hidden"></form>'),
  events: {
    'click .js-toggle-hidden': 'toggleHidden'
  },
  render: function(){
     this.$el.html(this.template());
     return this;
   },

   toggleHidden: function(){
     this.$('.drop').toggleClass('hidden');
   }

 });


export default ButtonView;
