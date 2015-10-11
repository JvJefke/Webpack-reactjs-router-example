var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var _ = require('underscore');

// Define initial data points
var _images = [];

var addImage = function addImage(src){
    _images.push(src);
}

var HomeStore = {}
// Extend ProductStore with EventEmitter to add eventing capabilities
var HomeStore = _.extend({}, EventEmitter.prototype, {

    // Return Product data
    getImages: function() {
      return _images;
    },

    emitChange: function() {
      this.emit('change');
    },

    addChangeListener: function(callback) {
      this.on('change', callback);
    },

    removeChangeListener: function(callback) {
      this.removeListener('change', callback);
    }

});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {

    // Respond to ADD_IMAGE action
    case AppConstants.ADD_IMAGE:
      addImage(action.ImageSrc);
      break;

  }

  // If action was responded to, emit change event
  HomeStore.emitChange();

  return true;

});

module.exports = HomeStore;
