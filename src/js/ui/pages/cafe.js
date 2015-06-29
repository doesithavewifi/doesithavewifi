var React = require('react');

var Router = require('react-router'),
  State = Router.State;

import { FluxComponent } from '../../flux';


module.exports = React.createClass({
  mixins: [State],

  render: function() {
    var id = this.getParams().id;

    return (
      <FluxComponent connectToStores={['app']}>
        <div>{id}</div>
      </FluxComponent>
    );
  },
});
