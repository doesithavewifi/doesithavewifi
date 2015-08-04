var React = require('react');
var Link = require('react-router').Link;

var Logo = require('./logo'),
    About = require('./about');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      showAbout: false
    }
  },

  toggleAbout: function(event){
    event.preventDefault();
    this.setState({
      showAbout: !this.state.showAbout
    })
  },

  render: function() {    
    return (
      <header className="header">
        <div className="logo-wrapper">
          <Logo />
          <span className="dropdown">Taipei</span>
        </div>
        <nav className="main-nav">
          <ul>
            <li>
              <a href="#" onClick={this.toggleAbout}>About</a>
              <About show={this.state.showAbout} toggleAbout={this.toggleAbout} />
            </li>
          </ul>
        </nav>
        
      </header>
    );    
  },
});
