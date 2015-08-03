var React = require('react');

module.exports = React.createClass({
  propTypes: {
    userGeo: React.PropTypes.object,
  },

  getDefaultProps: function() {
    return {
      userGeo: null,
    };
  },
  
  render: function() {    
    var distanceHeader = null;

    if (this.props.userGeo) {
      distanceHeader = (
        <div className="distance-header">Distance</div>
      );
    }

    return (
      <div className="item-header-wrapper">
        <div className="item-header">
          <div className="name-header">Name</div>
          <div className="rating-header">Editor's Rating</div>
          <div className="wifi-header">WiFi Quality</div>
          <div className="cost-header">Affordability</div>
          <div className="location-header">Nearest MRT</div>
          {distanceHeader}
        </div>
      </div>
    );    
  },
});
