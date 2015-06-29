var _ = require('lodash');

var React = require('react');

var Tooltip = require('tether-tooltip');



module.exports = React.createClass({
  propTypes: {
    body : React.PropTypes.object,
  },

  getDefaultProps: function() {
    return {
      body: null,
    };
  },


  render: function() {   
    return (
      <span className="popup-wrapper">
        <span className="popup-target" ref="target">{this.props.children}</span>
        <div className="popup-body" ref="target">bla bla bla</div>
      </span>
    );
  },

});

