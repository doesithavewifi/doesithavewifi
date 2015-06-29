var React = require('react');

module.exports = React.createClass({
  render: function() {    
    return (
      <div className="item-header-wrapper">
        <div className="item-header">
          <div className="name-header">Name</div>
          <div className="rating-header">Editor's Rating</div>
          <div className="wifi-header">WiFi Quality</div>
          <div className="cost-header">Affordability</div>
          <div className="location-header">Nearest MRT</div>
        </div>
      </div>
    );    
  },
});
