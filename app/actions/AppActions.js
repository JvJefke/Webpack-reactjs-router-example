var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

// Define actions object
var AppActions = {

  // Receive inital product data
  receiveProduct: function(data) {
    AppDispatcher.handleAction({
      actionType: AppConstants.RECEIVE_DATA,
      data: data
    });
  }

};

module.exports = AppActions;
