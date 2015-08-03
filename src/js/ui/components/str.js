var React = require('react');
var Link = require('react-router').Link;


var UnknownValue = require('./unknownValue');


module.exports = React.createClass({
  propTypes: {
    value : React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      value: null,
    };
  },


  render: function() {   
    if (!this.props.value) {
      return <UnknownValue />;
    } else {
      return <span>{this.props.value}</span>;
    }
  }
});
