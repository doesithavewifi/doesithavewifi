var React = require('react');

import { FluxComponent } from '../../flux';

var ItemList = require('../components/itemList'),
  Logo = require('../components/logo'),
  Hero = require('../components/hero');

var heroUrl = "/img/header.jpg",
  title = "Find the best cafes to work in your city";


module.exports = React.createClass({
  render: function() {    
    var content = null;

    if (this.props.appDatabase) {
      content = <ItemList items={this.props.appDatabase} />;
    } else {
      content = <div>Loading data...</div>;
    }

    return (
      <div className="home">
        <FluxComponent connectToStores={['app']}>
          <Hero heroUrl={heroUrl} title={title} />
          {content}
        </FluxComponent>
      </div>
    );
  },
});
