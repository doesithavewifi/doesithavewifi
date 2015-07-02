var React = require('react');

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
    // icons not working yet so we output text for now
    return (
      <i className={`icon-${this.props.name}`}>{this.props.name}</i>
    );
  }

});
