var React = require('react');

module.exports = React.createClass({

  render: function() {   
    var nav = this.props.nav.map(function(ele){
      return (
        <a href={ele.link} className="tab">{ele.name}</a>
      )
    }); 
    return (
      <div className="sub-nav">
        {nav}
      </div>
    );    
  },
});

