var React = require('react');

var OverlayModal = require('./overlayModal'),
  Constants = require('../../constants'),
  ButtonIcon = require('./iconButton');


module.exports = React.createClass({
  render: function() {
    return (
      <OverlayModal 
          show={this.props.show} 
          onClick={this.props.toggleAbout}
          bgColor="rgba(255, 255, 255, 0.8)">
        <div className="about-popup">
          <ButtonIcon className="close-button" icon="close" onClick={this.props.toggleAbout} />
          <h2>About this project</h2>
          <p>
            <em>Does it have Wifi</em> is a project to document all the working cafes in 
            a city. The team behind Does it have wifi work predominantly from 
            cafes, and finding cafes with the right environment for 
            working is difficult. <em>Does it have Wifi</em> makes it easy for you to find such places.
          </p>
          <p>
            Know of a great cafe that you want to add to the list? let us know by 
            filling in our <a href={Constants.ADD_FORM_URL} target="_blank">Add Cafe</a> form. 
            At the moment we're only displaying cafes in Taipei (where we work) but hope to add 
            your city as soon as we get enough quality submissions!
          </p>
          <p>
            By <a href="https://twitter.com/Jef_Lau">@Jef_Lau</a>, <a href="https://twitter.com/hiddentao">@hiddentao</a> and <a href="https://twitter.com/leemanrolls">@leemanrolls</a>.
          </p>
        </div>
      </OverlayModal>
    );    
  },
});
