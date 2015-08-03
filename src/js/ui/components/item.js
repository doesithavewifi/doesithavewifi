var React = require('react');

var Router = require('react-router'),
    Link = Router.Link;

var DataElement = require('./dataElement'),
    Stars = require('./stars'),
    Str = require('./str'),
    UnknownValue = require('./unknownValue'),
    utils = require('../../utils');

module.exports = React.createClass({
  propTypes: {
    userGeo: React.PropTypes.object,
    item : React.PropTypes.object,
  },

  getDefaultProps: function() {
    return {
      item: {},
    };
  },

  render: function() {    
    var item = this.props.item;

    var wifiDescription = utils.generateWifiDescription(item.wifi_quality);

    var affordability = utils.getRatingFromPrice(item.affordability.avge);

    var distance = null;
    if (!item.distance_from_user) {
      distance = <UnknownValue />
    } else {
      distance = (
       <DataElement className="distance">{item.distance_from_user}</DataElement>   
      );
    }

    return (
      <Link className="item" to="cafe" params={ {id:item.slug} } key={item.slug}>
        <DataElement className="name">
          {item.name}
        </DataElement>
        <DataElement className="rating">
          <Stars rating={item.editor_rating}  />
        </DataElement>
        <DataElement className="wifi" popup={wifiDescription}>
          <Stars rating={item.wifi_quality} fullIcon="wifi" halfIcon="shit-wifi" />
        </DataElement>
        <DataElement className="cost">
          <Stars rating={affordability} />
        </DataElement>
        <DataElement className="location">
          <Str value={item.closest_station.station} />
        </DataElement>
        {distance}
      </Link>
    );    
  },
});



