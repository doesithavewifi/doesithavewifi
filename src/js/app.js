var React = require('react');
var Router = require('react-router');

var { Route, NotFoundRoute, DefaultRoute, RouteHandler } = Router;

var Layout = require('./ui/pages/layout'),
    Home = require('./ui/pages/home'),
    Cafe = require('./ui/pages/cafe');

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
    this.state.flux.getActions('app').start();
  }
});



var routes = (
  <Route handler={App}>
    <NotFoundRoute name="404" handler={Home} />
    <DefaultRoute name="home" handler={Home} />
    <Route name="cafe" handler={Cafe} path="/taipei/:id" />
  </Route>
);



Router.run(routes, Router.HashLocation, function(Handler, state) {
  React.render(
    <Handler routes={state.routes} params={state.params} query={state.query} />, 
    $('.wrapper').get(0)
  );
});
 

