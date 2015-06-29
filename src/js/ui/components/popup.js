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
      </span>
    );
  },

  componentWillUnmount: function() {
    if (this.tooltip) {
      this.tooltip.drop.destroy();
    }
  },


  componentDidMount: function() {
    this.$target = $(React.findDOMNode(this.refs['target']));

    this.tooltip = new Tooltip({
      target: this.$target.get(0),
      content: "My awesome <b>content</b>.",
      classes: 'popup-tether-body',
      position: 'bottom center'
    });
  },
});

