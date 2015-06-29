var React = require('react');

var Router = require('react-router'),
  Link = Router.Link;

var Popup = require('./popup');

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
          <div className="name">{item['Name']}</div>
          <div className="rating">{item['Editor Rating']}</div>
            <Stars stars={5} rating={item['Editor Rating']}  />
          <div className="wifi">
            <Popup body={wifiDescription}>
              <span>{item['Wifi Quality']}</span>
            </Popup>
          </div>
          <div className="cost">{item['Affordability(Latte/Tea/HC)']}</div>
          <div className="location">{item['Closest Station']}</div>
        </Link>
    );    
  },
});
