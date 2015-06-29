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
    var renderedItems = this.props.items.map(function(item) {
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
