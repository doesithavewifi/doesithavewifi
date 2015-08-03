var React = require('react');

var Loader = require('../components/loader');

import { FluxComponent } from '../../flux';


module.exports = React.createClass({

  render: function() {
    var content = null;

    content = (
      <div className="about-page">
        Does it have Wifi is a project to document all the working cafes in a city. The team behind Does it have wifi are all based in Taiwan and predominantly work from home or cafes, but finding cafes with the right environment for working is difficult. We want to make it easier for remote workers everywhere to work from a cafe that has great wifi, decent drinks and plug sockets for your devices.
      </div>
    )

    return (
      <FluxComponent connectToStores={['app']}>
        {content}
      </FluxComponent>
    );
  },
});
