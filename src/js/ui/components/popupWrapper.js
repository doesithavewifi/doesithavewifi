var _ = require('lodash');

var React = require('react');

var Tether = require('tether');



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
      <span>
        <span ref="target">{this.props.children}</span>
        <span ref="element">bla bla bla</span>
      </span>
    );
  },

  componentWillUnmount: function() {
    if (this.tether) {
      this.tether.destroy();
    }
  },


  componentDidMount: function() {
    this.$target = $(React.findDOMNode(this.refs['target']));
    this.$element = $(React.findDOMNode(this.refs['element']));

    this.$element.hide();

    this.tether = new Tether({
      element: this.$element.get(0),
      target: this.$target.get(0),
      attachment: 'bottom left',
      targetAttachment: 'top left'
    });

    this.$target.on('mouseover', _.bind(function() {
      this.$element.show();
    }, this));

    this.$target.on('mouseout', _.bind(function() {
      this.$element.hide();
    }, this));
  },
});

