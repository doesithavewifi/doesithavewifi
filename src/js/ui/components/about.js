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
            <em>Does it have Wifi</em> is a project to document all the best cafes for working in 
            a city. We (the team) work predominantly from 
            cafes and know how difficult is to find a place with the 
            right environment. <em>Does it have Wifi</em> solves this problem.
          </p>
          <p>
            Know of a great cafe? Fill out our <a href={Constants.ADD_FORM_URL} target="_blank">Add Cafe</a> form. 
            At the moment we're only showing Taipei but will add other cities 
            as and when we get enough quality submissions.
          </p>
          <p>
            Find us at: <a href="https://twitter.com/Jef_Lau">@Jef_Lau</a>, <a href="https://twitter.com/hiddentao">@hiddentao</a> and <a href="https://twitter.com/leemanrolls">@leemanrolls</a>. 
          </p>
        </div>
      </OverlayModal>
    );    
  },
});
