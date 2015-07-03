var React = require('react');

var Router = require('react-router'),
  Link = Router.Link;

var DataElement = require('./dataElement');

var Stars = require('./stars');

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
      <Link className="item" to="cafe" params={ {id:item.Slug} } key={item.Slug}>
        <DataElement className="name">
          {item['Name']}
        </DataElement>
        <DataElement className="rating">
          <Stars stars={5} rating={item['Editor Rating']}  />
        </DataElement>
        <DataElement className="wifi" popup={wifiDescription}>
          {item['Wifi Quality']}
        </DataElement>
        <DataElement className="cost">
          {item['Affordability(Latte/Tea/HC)']}
        </DataElement>
        <DataElement className="location">
        {item['Closest Station']}
        </DataElement>
      </Link>
    );    
  },
});



