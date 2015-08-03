var _ = require('lodash');
var React = require('react');

var Item = require('./item');
var ItemHeaders = require('./itemHeaders');

const DEFAULT_COLUMNS = [
  {
    key: 'name',
    label: 'Name',
    cssName: 'name',
  },
  {
    key: 'editor_rating',
    label: 'Editor\'s rating',
    cssName: 'rating',
  },
  {
    key: 'wifi_quality',
    label: 'WiFi Quality',
    cssName: 'wifi',
  },
  {
    key: 'affordability',
    label: 'Affordability',
    cssName: 'cost',
  },
  {
    key: 'closest_station',
    label: 'Nearest MRT',
    cssName: 'location',
  },
];



module.exports = React.createClass({
  propTypes: {
    userGeo: React.PropTypes.object,
    items : React.PropTypes.array,
  },

  getDefaultProps: function() {
    return {
      userGeo: null,
      items: [],
    };
  },

  render: function() {    
    var columns = [].concat(DEFAULT_COLUMNS);
    if (this.props.userGeo) {
      columns.push({
        key: 'distance_from_user',
        label: 'Distance',
        cssName: 'distance',
      });
    }

    var renderedItems = _.map(this.props.items, (item) => {
      return ( <Item item={item} columns={columns} /> );
    });

    return (
      <div className="item-list-wrapper">
        <ItemHeaders columns={columns} />
        <div className="item-list">
          {renderedItems}
        </div>
      </div>
    );    
  },
});

