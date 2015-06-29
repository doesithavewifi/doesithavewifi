var React = require('react');

var Router = require('react-router'),
  State = Router.State;



module.exports = React.createClass({
  mixins: [State],

  render: function() {
    var id = this.getParams().id;

    return (
      <div>{id}</div>
    );
  },
});
