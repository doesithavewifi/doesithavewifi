var React = require('react');

var Router = require('react-router'),
    Link = Router.Link,
    Utils = require('../../utils.js');

var DataElement = require('./dataElement'),
    Stars = require('./stars');

module.exports = React.createClass({
  propTypes: {
    item : React.PropTypes.object,
  },

  getDefaultProps: function() {
    return {
      item: {},
    };
  },

  render: function() {    
    var item = this.props.item;

    var wifiDescription = (
      <div>test</div>
    );

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
          <Stars rating={Utils.getRatingFromPrice(item.affordability.avge)} />
        </DataElement>
        <DataElement className="location">
          {item.closest_station.station}
        </DataElement>
      </Link>
    );    
  },
});



