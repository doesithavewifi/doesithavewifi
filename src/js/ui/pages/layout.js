var React = require('react');

var TopHeader = require('../components/topHeader');


module.exports = React.createClass({
  render: function() {    
    return (
      <div>
        <TopHeader />
        {this.props.children}
      </div>
    );    
  },
});
