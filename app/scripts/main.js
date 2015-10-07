import ImagesCollection from 'models/images-collection';
import CreateImageView from 'views/images/create';
import ButtonView from 'views/images/button';
import ImagesListView from 'views/images/list';


$(document).ready(function(){
  var images = new ImagesCollection();

  var buttonView = new ButtonView({collection: images});
  $('.top').append(buttonView.render().el);

  var createImageView = new CreateImageView({collection: images});
  $('.drop').append(createImageView.render().el);

  var imagesListView = new ImagesListView({collection: images});
  $('#container').append(imagesListView.render().el);

  // Emulate a fetch
  images.add([
//    {title: "JavaScript: The Good Parts", author: "Douglas Crokford"},
//    {title: "Practical Object Oriented Design in Ruby", author: "Sandi Metz"}
  ]);
//
 });
