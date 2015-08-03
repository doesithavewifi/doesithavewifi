var _ = require('lodash');
var React = require('react');

var Item = require('./item');
var ItemHeaders = require('./itemHeaders');

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
    var renderedItems = _.map(this.props.items, (item) => {
      return ( <Item item={item} userGeo={this.props.userGeo} /> );
    });

    return (
      <div className="item-list-wrapper">
        <ItemHeaders userGeo={this.props.userGeo} />
        <div className="item-list">
          {renderedItems}
        </div>
      </div>
    );    
  },
});

