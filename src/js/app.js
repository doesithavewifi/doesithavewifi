var React = require('react');
var Router = require('react-router');
var Tabletop = require('tabletop').Tabletop;

var { Route, DefaultRoute, RouteHandler } = Router;

var Layout = require('./ui/pages/layout');
var Home = require('./ui/pages/home');


const SPREADSHEET_URL = "https://docs.google.com/spreadsheets/d/17EzWbGUykvBOcy6KZsjJy15jnvfuprmrk5OmBe3oOws/pubhtml?gid=0&single=true";



var App = React.createClass({
  getInitialState: function() {
    return {
      database: null,
    };
  },

  render: function() {
    return (
      <Layout>
        <RouteHandler {...this.props} database={this.state.database}/>
      </Layout>
    );
  },

  componentDidMount: function() {
    Tabletop.init({ 
      key: SPREADSHEET_URL,
      callback: function(data, tabletop) {
        console.log(data);
        
        if (this.isMounted()) {
          this.setState({
            database: data
          });
        }
      },
      callbackContext: this,
      simpleSheet: true
    });
  },
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
 

