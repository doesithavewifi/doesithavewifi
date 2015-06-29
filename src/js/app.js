var React = require('react');
var Router = require('react-router');

var { Route, DefaultRoute, RouteHandler } = Router;

var Layout = require('./ui/pages/layout');
var Home = require('./ui/pages/home');
var Cafe = require('./ui/pages/cafe');

import { FluxManager, FluxComponent } from './flux';





var App = React.createClass({
  getInitialState: function() {
    return {
      flux: new FluxManager(),
    };
  },

  render: function() {
    return (
      <FluxComponent flux={this.state.flux} connectToStores={['app']}>
        <Layout {...this.props}>
          <RouteHandler {...this.props} />
        </Layout>
      </FluxComponent>
    );
  },

  componentDidMount: function() {
    this.state.flux.getActions('app').loadDatabase();
  }
});



var routes = (
  <Route handler={App}>
    <DefaultRoute name="home" handler={Home} />
    <Route name="cafe" handler={Cafe} path="/taipei/:id" />
  </Route>
);



Router.run(routes, Router.HashLocation, function(Handler, state) {
  React.render(
    <Handler routes={state.routes} params={state.params} query={state.query} />, 
    $('main').get(0)
  );
});
 

