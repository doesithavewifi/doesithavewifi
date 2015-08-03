var React = require('react');

var Classes = require('classnames');

module.exports = React.createClass({

  render: function() {
    var classes = Classes("section-header", this.props.className);
    return (
      <h2 className={classes}>
        {this.props.children}
      </h2>
    );    
  },
});

