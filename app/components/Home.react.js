var HomeStore = require('../stores/HomeStore');
var HomeActions = require('../actions/HomeActions');

// Method to retrieve state from Stores
var getHomeState = function getHomeState() {
  return {
    Images: HomeStore.getImages()
  };
}

// Define main Controller View
var Home = React.createClass({

  detectEnter: function detectEnter(e){
      if (e.keyCode === 13){
          HomeActions.newImage(e.target.value);
          e.target.value = "";
      }
  },

  // Get initial state from stores
  getInitialState: function() {
    return getHomeState();
  },

  // Add change listeners to stores
  componentDidMount: function() {
    HomeStore.addChangeListener(this._onChange);
    document.getElementById('newImage').addEventListener('keyup', this.detectEnter);
  },

  // Remove change listers from stores
  componentWillUnmount: function() {
    HomeStore.removeChangeListener(this._onChange);
  },

  // Render our child components, passing state via props
  render: function() {
    return (
      <div className="Home">
        <input placeholder="Place the URL of an image and press Enter" type='text' id='newImage' />
        {
          this.state.Images.map(
            function(src, key){
                return(
                  <div key={'imgEl_' + key} className='imgEl' style={{backgroundImage: 'url(' + src + ')'}}>
                  </div>
                );
            }
          )
        }
      </div>
    );
  },

  // Method to setState based upon Store changes
  _onChange: function() {
    this.setState(getHomeState());
  }

});

module.exports = Home;
