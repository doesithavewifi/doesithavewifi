var React = require('react');

var Item = require('./item');


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
      <ul className="item-list">
        {renderedItems}
      </ul>
    );    
  },
});
