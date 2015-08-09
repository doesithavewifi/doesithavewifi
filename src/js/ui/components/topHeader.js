var React = require('react');
var Link = require('react-router').Link;

var Logo = require('./logo'),
    About = require('./about'),
    MobileMenu = require('./mobileMenu');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      showAbout: false
    }
  },

  toggleAbout: function(event){
    this.setState({
      showAbout: !this.state.showAbout
    })
  },

  toggleMobileMenu: function(event){
    event.preventDefault();
    this.setState({
      showMobileMenu: !this.state.showMobileMenu
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
            <li className="mobile-button">
              <a href="#" onClick={this.toggleMobileMenu}>
              <i></i>
              </a>
            </li>
            <li>
              <Link to="add">Add Cafe</Link>
            </li>
            <li>
              <a href="#" onClick={this.toggleAbout}>About</a>
            </li>
          </ul>
        </nav>

        <MobileMenu 
          show={this.state.showMobileMenu} 
          toggleMobileMenu={this.toggleMobileMenu}
          toggleAbout={this.toggleAbout} />
        <About show={this.state.showAbout} toggleAbout={this.toggleAbout} />
        
      </header>
    );    
  },
});
