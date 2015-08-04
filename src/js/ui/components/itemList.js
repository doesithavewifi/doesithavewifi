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
  {
    key: 'distance_from_user',
    label: 'Distance',
    cssName: 'distance',
    hidden: true,
  },
];


const DEFAULT_SORT = {
  key: 'name',
  asc: true,
};



module.exports = React.createClass({
  propTypes: {
    userGeo: React.PropTypes.object,
    items : React.PropTypes.object,
  },

  getDefaultProps: function() {
    return {
      userGeo: null,
      items: {},
    };
  },

  getInitialState: function() {
    return {
      sort: null,
    };
  },

  render: function() {    
    var defaultSort = DEFAULT_SORT;

    var columns = [].concat(DEFAULT_COLUMNS);
    if (this.props.userGeo) {
      let distanceCol = _.filter(columns, (c) => {
        return 'distance_from_user' === c.name;
      });

      distanceCol.hidden = false;

      defaultSort = {
        key: 'distance_from_user',
        asc: true,
      };
    }

    var activeSort = this.state.sort || defaultSort;

    var sortedItems = this._getSortedItems(this.props.items, activeSort);

    var renderedItems = _.map(sortedItems, (item) => {
      return ( <Item item={item} columns={columns} /> );
    });

    return (
      <div className="item-list-wrapper">
        <ItemHeaders columns={columns} sort={activeSort} sortCallback={this._updateSort} />
        <div className="item-list">
          {renderedItems}
        </div>
      </div>
    );    
  },


  _updateSort: function(newSort) {
    this.setState({
      sort: newSort
    });
  },


  _getSortedItems: function(items, sort) {
    var ret = _.values(items || {});

    ret.sort((a, b) => {
      let itemPath = null;

      switch (sort.key) {
        case 'closest_station':
          itemPath = 'closest_station.station';
          break;

        case 'affordability':
          itemPath = 'affordability.avge';
          break;      

        default:
          itemPath = sort.key;
      };

      let val1 = _.get(a, itemPath),
        val2 = _.get(b, itemPath);

      if (sort.asc) {
        return (val1 > val2) ? 1 : -1;
      } else {
        return (val1 > val2) ? -1 : 1;
      }
    });

    return ret;
  },



});

