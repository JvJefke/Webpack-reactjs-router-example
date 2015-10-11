var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxCartConstants = require('../constants/AppConstants');
var _ = require('underscore');

// Define initial data points
var _product = {}, _selected = null;

// Method to load product data from mock API

var AppStore = {}
// Extend ProductStore with EventEmitter to add eventing capabilities
/*var AppStore = _.extend({}, EventEmitter.prototype, {

  // Return Product data
  // getProduct: function() {
  //   return _product;
  // },

});*/

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {

    // // Respond to RECEIVE_DATA action
    // case FluxCartConstants.RECEIVE_DATA:
    //   loadProductData(action.data);
    //   break;

  }

  // If action was responded to, emit change event
  //AppStore.emitChange();

  return true;

});

module.exports = AppStore;
