var React = require('react');
var Link = require('react-router').Link;

var Icon = require('./icon');


module.exports = React.createClass({
  propTypes: {
    name : React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      name: null,
    };
  },

  render: function() {   
    return (
      <div className="logo">
        <Link to="home">
          <h1>Does it have Wifi?</h1>
        </Link>
      </div>
    );
  }

});
