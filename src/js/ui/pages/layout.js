var React = require('react');

import { FluxComponent } from '../../flux';

var TopHeader = require('../components/topHeader');


module.exports = React.createClass({
  render: function() {    
    return (
      <FluxComponent connectToStores={['app']}>
        <TopHeader/>
        {this.props.children}
      </FluxComponent>
    );    
  },
});
