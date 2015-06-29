var React = require('react');

var Logo = require('../components/logo');



module.exports = React.createClass({
  propTypes: {
    database : React.PropTypes.object,
  },

  getDefaultProps: function() {
    return {
      database: null,
    };
  },

  render: function() {    
    if (this.props.database) {
      return (
        <div>
          "Who is your Daddy and what does he do?"
          <Logo />
        </div>
      );    
    } else {
      return (
        <div>Not yet loaded!</div>
      );
    }
  },
});
