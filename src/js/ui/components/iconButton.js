var React = require('react');

var Icon = require('./icon');


module.exports = React.createClass({
  propTypes: {
    icon : React.PropTypes.string.isRequired,
    onClick : React.PropTypes.func.isRequired,
    className : React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      className: null
    };
  },

  render: function() {   
    let classes = 'icon-button';

    if (this.props.className) {
      classes = `${classes} ${this.props.className}`;
    }

    return (
      <button className={classes} onClick={this.props.onClick}>
        <Icon name={this.props.icon} />
      </button>
    );
  },

});
