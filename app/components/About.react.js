var HomeStore = require('../stores/HomeStore');
var HomeActions = require('../actions/HomeActions');

// Method to retrieve state from Stores
function getHomeState() {
  return {
    Images: HomeStore.getImages()
  };
}

function detectEnter(e){
    if (e.keyCode === 13)
      HomeActions.newImage(e.target.value);
}

// Define main Controller View
var Home = React.createClass({

  // Render our child components, passing state via props
  render: function() {
    return (
      <div>
        <h2>Hi!</h2>
      </div>
    );
  },

  // Method to setState based upon Store changes
  _onChange: function() {
    this.setState(getHomeState());
  }

});

module.exports = Home;
