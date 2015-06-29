var _ = require('lodash');
var React = require('react');

var Item = require('./item');
var ItemHeaders = require('./itemHeaders');

module.exports = React.createClass({
  propTypes: {
    items : React.PropTypes.array,
  },

  getDefaultProps: function() {
    return {
      items: [],
    };
  },

  render: function() {    
    var renderedItems = _.map(this.props.items, function(item) {
      return ( <Item item={item} /> );
    });

    return (
      <div className="item-list-wrapper">
        <ItemHeaders />
        <div className="item-list">
          {renderedItems}
        </div>
      </div>
    );    
  },
});
