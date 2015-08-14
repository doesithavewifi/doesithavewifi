var React = require('react');

var Logo = require('./logo'),
    Constants = require('../../constants'),
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
              <a href={Constants.ADD_FORM_URL} target="_blank">Add Cafe</a>
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
