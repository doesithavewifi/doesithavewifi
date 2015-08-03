var React = require('react');

import { FluxComponent } from '../../flux';

var TopHeader = require('../components/topHeader'),
  Loader = require('../components/loader'),
  ErrorMsg = require('../components/errorMsg');


module.exports = React.createClass({
  render: function() {    
    var loader = null;

    if (!this.props.appDatabase) {
      if (this.props.timedOut) {
        let errorText = (
          <div>
            <p>Sorry, it appears to be taking too long to load!</p>
            <p>Try refreshing the page.</p>
          </div>
        );

        loader = <ErrorMsg text={errorText} />
      } else {
        loader = <Loader />;
      }
    }

    return (
      <FluxComponent connectToStores={['app']}>
        <TopHeader/>
        {loader}
        {this.props.children}
      </FluxComponent>
    );    
  },
});

