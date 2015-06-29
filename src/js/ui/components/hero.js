var React = require('react');

module.exports = React.createClass({
  render: function() {    
    return (
      <section className="hero">
        <h2 className="title">{this.props.title}</h2>
        <img src={this.props.heroUrl} />
      </section>
    );    
  },
});
