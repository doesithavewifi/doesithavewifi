var React = require('react');

var Stars = require('../components/stars');

module.exports = React.createClass({
  render: function() {    
    if(this.props.rating){
      var rating = <div className="editor-rating"><Stars rating={this.props.rating} /></div>
    }
    if(this.props.address){
      var address = 
          <div className="address">{this.props.address}</div>
    }

    var heroAttrs = {
      style: {
        backgroundImage: `url(/img/header.jpg)`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }
    };
    if (this.props.heroUrl) {
      heroAttrs.style.backgroundImage = `url(${this.props.heroUrl})`
    };

    return (
      <section className="hero" {...heroAttrs}>
        <div className="content">
          <h2 className="title">{this.props.title}</h2>
          {rating}
          {address}
        </div>
      </section>
    );    
  },
});
