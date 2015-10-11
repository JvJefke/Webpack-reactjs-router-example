var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

// Define actions object
var HomeActions = {

  // Receive inital product data
  newImage: function(src) {
    AppDispatcher.handleAction({
      actionType: AppConstants.ADD_IMAGE,
      ImageSrc: src
    });
  }

};

module.exports = HomeActions;
