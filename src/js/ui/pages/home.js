var React = require('react');

var Logo = require('../components/logo');



module.exports = React.createClass({
  render: function() {    
    return (
      <div>
        "Who is your Daddy and what does he do?"
        <Logo />
      </div>
    );    
  },
});
