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
      <span className="popup-wrapper">
        <span className="popup-target" ref="target">{this.props.children}</span>
        <span className="popup-body" ref="body">bla bla bla</span>
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
    this.$body = $(React.findDOMNode(this.refs['body']));

    this.$body.hide();

    this.tether = new Tether({
      element: this.$body.get(0),
      target: this.$target.get(0),
      attachment: 'bottom center',
      targetAttachment: 'bottom center'
    });

    this.$target.on('mouseover', _.bind(function() {
      this.$body.show();
    }, this));

    this.$target.on('mouseout', _.bind(function() {
      this.$body.hide();
    }, this));
  },
});

