(function(){
  //var AppStore = require('../stores/AppStore.js');
  var ReactRouter = require('react-router');
  var ReactDOM = require('react-dom');
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;
  var Link = ReactRouter.Link;
  var createBrowserHistory = require('history/lib/createBrowserHistory');

  var Home = require('../components/Home.react.js');
  var About = require('../components/About.react.js');

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

  // Finally, we render a <Router> with some <Route>s.
  // It does all the fancy routing stuff for us.
  ReactDOM.render((
    <Router history={createBrowserHistory()}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <route path='/about' component={About} />
      </Route>
    </Router>
  ), document.getElementById('router'))

  module.exports = App;
})();
