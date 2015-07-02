var React = require('react');

var Router = require('react-router'),
  State = Router.State,
  Hero = require('../components/hero.js');

import { FluxComponent } from '../../flux';


module.exports = React.createClass({
  mixins: [State],

  render: function() {
    var content = null;

    if(this.props.appDatabase){

      var id = this.getParams().id;
      var item = this.props.appDatabase[id];
      var heroUrl = `/img/cafes/${id}.jpg`;
      
      content = 
        <div className="cafe">
          <Hero heroUrl={heroUrl} title={item['Name']}/>
          <main>
            <p>{item['Editor Rating']}</p>
            <p>{item['Description']}</p>
            <p>{item['Website']}</p>
            <p>{item['Address']}</p>
          </main>
        </div>
      ;
    } else {
      content = <div>Loading data...</div>;
    }

    return (
      <FluxComponent connectToStores={['app']}>
        {content}
      </FluxComponent>
    );
  },
});
