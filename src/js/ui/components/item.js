var React = require('react');

var Router = require('react-router'),
  Link = Router.Link;

var Element = require('./element');

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
        <div className="rating">
          <Stars stars={5} rating={item['Editor Rating']}  />
        </div>
        <div className="wifi">
          <Element popup={wifiDescription}>
            {item['Wifi Quality']}
          </Element>
        </div>
        <div className="cost">{item['Affordability(Latte/Tea/HC)']}</div>
        <div className="location">{item['Closest Station']}</div>
      </Link>
    );    
  },
});



