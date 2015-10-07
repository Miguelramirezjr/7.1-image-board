var Image = Backbone.Model.extend({
  defaults: function(){
    return {
      source: "",
      caption: ""
    }
  },

  validate: function(attributes) {
    var errors = {};
    if(_.isEmpty(attributes.source)){
      errors.title = "Must have a valid image";
    }
    if(_.isEmpty(attributes.caption)){
      errors.author = "Must have a valid caption";
    }
    return _.keys(errors).length ? errors : undefined;
  }
});

export default Image;
