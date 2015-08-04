var React = require('react');

var SpinLoader = require('react-loader'),
  OverlayModal = require('./overlayModal');



module.exports = React.createClass({
  render: function() {  
    var options = {
      lines: 13,
      length: 20,
      width: 10,
      radius: 30,
      corners: 1,
      rotate: 0,
      direction: 1,
      color: '#000',
      speed: 1,
      trail: 60,
      shadow: false,
      hwaccel: false,
      zIndex: 2e9,
      top: '50%',
      left: '50%',
      scale: 2.50
    };

    return (
      <OverlayModal show={true}>
        <SpinLoader className="loader" loaded={false} {...options} />
      </OverlayModal>
    );
  },

});
