var React = require('react');

module.exports = React.createClass({
  propTypes: {
    name : React.PropTypes.string,
    onClick : React.PropTypes.func,
  },

  getDefaultProps: function() {
    return {
      name: null,
      onClick: null,
    };
  },

  render: function() {   
    // icons not working yet so we output text for now
    return (
      <i className={`icon-${this.props.name}`} onClick={this.props.onClick}/>
    );
  }

});
