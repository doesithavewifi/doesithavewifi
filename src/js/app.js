var React = require('react');
var Router = require('react-router');

var { Route, DefaultRoute, RouteHandler } = Router;

var Home = require('./ui/pages/home');




var App = React.createClass({
  render: function() {
    return (
      <RouteHandler {...this.props}/>
    );
  }
});



var routes = (
  <Route handler={App}>
    <DefaultRoute name="home" handler={Home} />
  </Route>
);



Router.run(routes, Router.HashLocation, function(Handler, state) {
  React.render(
    <Handler routes={state.routes} params={state.params} query={state.query} />, 
    $('main').get(0)
  );
});
 

