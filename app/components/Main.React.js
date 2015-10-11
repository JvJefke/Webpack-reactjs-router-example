(function(){
  //var AppStore = require('../stores/AppStore.js');
  var ReactRouter = require('react-router');
  var Link = ReactRouter.Link;

  // Define main Controller View
  var App = React.createClass({
    // Render our child components, passing state via props
    render: function() {
      return (
        <div>
        <div className="headerContainer">
          <header>
          <h1>Webpack React example</h1>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
            </ul>
          </header>
        </div>
          <div className='content'>
            {this.props.children}
          </div>
        </div>
      );
    }
  });

  module.exports = App;
})();
