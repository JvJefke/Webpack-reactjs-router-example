(function(){
  require('../assets/lib/bootstrap/css/bootstrap.css');
  require('../assets/scss/style.scss');

  var ReactRouter = require('react-router');
  var ReactDOM = require('react-dom');
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;
  var Link = ReactRouter.Link;
  var createHistory = require('history').createHistory;
  var useBasename = require('history').useBasename;

  var Main = require('./components/Main.React');

  const history = useBasename(createHistory)({
    basename: ''
  });

  const rootRoute = {
    component: 'div',
    childRoutes: [ {
      path: '/',
      component: require('./components/Main.React'),
      indexRoute: require('./routes/Home'),
      childRoutes: [
        require('./routes/About')
      ]
    } ]
  }

  ReactDOM.render(
    <Router history={history} routes={rootRoute} />,
    document.getElementById('main')
  );


})();
