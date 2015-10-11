(function(){
  require('../assets/lib/bootstrap/css/bootstrap.css');
  require('../assets/scss/style.scss');

  var Main = require('./components/Main.React');
  var ReactDOM = require('react-dom');
  
  // Render App Router
  ReactDOM.render(
    <Main />,
    document.getElementById('main')
  );
})();
