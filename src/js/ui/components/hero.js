var React = require('react');

module.exports = React.createClass({
  render: function() {    
    if(this.props.rating){
      var rating = <div className="editor-rating">{this.props.rating}</div>
    }
    if(this.props.address){
      var address = 
          <div className="address">{this.props.address}</div>
    }
    return (
      <section className="hero">
        <div className="content">
          <h2 className="title">{this.props.title}</h2>
          {rating}
          {address}
        </div>
        <img src={this.props.heroUrl} />
      </section>
    );    
  },
});
