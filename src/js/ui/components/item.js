var React = require('react');

var Router = require('react-router'),
  Link = Router.Link;

var PopupWrapper = require('./popupWrapper');


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
      <div className="item" key={item.Slug}>
        <Link to="cafe" params={ {id:item.Slug} }>
          <div className="name">{item['Name']}</div>
          <div className="rating">{item['Editor\'s Rating']}</div>
          <div className="wifi">
            <PopupWrapper body={wifiDescription}>
              <span>{item['Wifi Quality']}</span>
            </PopupWrapper>
          </div>
          <div className="cost">{item['Affordability(Latte/Tea/HC)']}</div>
          <div className="location">{item['Address']}</div>
        </Link>
      </div>
    );    
  },
});
