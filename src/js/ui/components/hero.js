var React = require('react');

var Stars = require('./stars'),
  Utils = require('../../utils');

module.exports = React.createClass({
  render: function() {    
    var rating;
    if(this.props.rating){
      rating = <Stars rating={this.props.rating} />;
    }

    var distance = null;
    if (undefined !== this.props.distance) {
      distance = Utils.prettyPrintDistance(this.props.distance) + ' away';
    }

    var heroAttrs = {
      style: {
        backgroundImage: `url(/img/header.jpg)`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }
    };
    if (this.props.heroUrl) {
      heroAttrs.style.backgroundImage = `url(${this.props.heroUrl})`
    };

    return (
      <section className="hero" {...heroAttrs}>
        <div className="content">
          <h2 className="title">{this.props.title}</h2>
          <div className="editor-rating">{rating}</div>
          <div className="address">{this.props.address}</div>
          <div className="distance">{distance}</div>
        </div>
      </section>
    );    
  },
});
