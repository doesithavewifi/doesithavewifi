var React = require('react');


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
    
    return (
      <div className="item">
        <div className="name">{item['Name']}</div>
        <div className="rating">{item['Editor\'s Rating']}</div>
        <div className="wifi">{item['Wifi Quality']}</div>
        <div className="cost">{item['Affordability(Latte/Tea/HC)']}</div>
        <div className="location">{item['Address']}</div>
      </div>
    );    
  },
});
