export default Backbone.View.extend({

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  serializeForm: function() {
    var result = {};
    var inputs = this.$el.serializeArray();
    inputs.forEach(function(input) {
      result[input.name] = input.value;
    });
    return result;
  }

});
