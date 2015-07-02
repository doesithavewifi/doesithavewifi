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

    return (
      <div className="element" {...attrs}>
        {this.props.children}
        {popupBody}
      </div>
    );
  }

});
