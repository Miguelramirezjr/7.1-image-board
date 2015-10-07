import Image from 'models/image';

var ImagesCollection = Backbone.Collection.extend({
  model: Image,
  url: "http://tiny-lasagna-server.herokuapp.com/collections/images"
});

export default ImagesCollection;
