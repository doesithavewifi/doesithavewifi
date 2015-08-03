var React = require('react');

import { FluxComponent } from '../../flux';

var ItemList = require('../components/itemList'),
  Hero = require('../components/hero');

var heroUrl = "/img/header.jpg",
  title = "Find the best cafes to work in your city";


module.exports = React.createClass({
  render: function() {    
    return (
      <div className="home">
        <FluxComponent connectToStores={['app']}>
          <Hero heroUrl={heroUrl} title={title} />
          <ItemList items={this.props.appDatabase} userGeo={this.props.userGeo} />
        </FluxComponent>
      </div>
    );
  },
});
