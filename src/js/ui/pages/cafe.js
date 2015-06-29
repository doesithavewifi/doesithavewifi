var React = require('react');

var Router = require('react-router'),
  State = Router.State;



module.exports = React.createClass({
  mixins: [State],

  render: function() {
    console.log( this.getParams() );

    var id = this.getParams().id;

    return (
      <div>{id}</div>
    );
  },
});
