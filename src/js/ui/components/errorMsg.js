var React = require('react');

var SpinLoader = require('react-loader'),
  OverlayModal = require('./overlayModal');


module.exports = React.createClass({
  propTypes: {
    text: React.PropTypes.object.isRequired
  },

  render: function() {  
    return (
      <OverlayModal show={true}>
        <div className="error-message">{this.props.text}</div>
      </OverlayModal>
    );
  },

});
