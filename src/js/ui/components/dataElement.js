var React = require('react');

module.exports = React.createClass({
  propTypes: {
    popup : React.PropTypes.object,
  },

  getDefaultProps: function() {
    return {
      popup: null,
    };
  },

  render: function() {   
    var attrs = {},
      popupBody = null;

    if (this.props.popup) {
      attrs["data-popup-trigger"] = true;

      popupBody = (
        <div className="popup-body">{this.props.popup}</div>
      );
    }

    var classes = `data-element ${this.props.className}`

    return (
      <div className={classes} {...attrs}>
        <span>{this.props.children}</span>
        {popupBody}
      </div>
    );
  }

});
