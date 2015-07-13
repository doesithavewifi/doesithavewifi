var React = require('react');

var Router = require('react-router'),
  State = Router.State,
  Hero = require('../components/hero'),
  RatingItem = require('../components/ratingItem'),
  SectionHeader = require('../components/sectionHeader');

import { FluxComponent } from '../../flux';


module.exports = React.createClass({
  mixins: [State],

  render: function() {
    var content = null;

    if(this.props.appDatabase){

      var id = this.getParams().id;
      var item = this.props.appDatabase[id];
      var heroUrl = `/img/cafes/${id}.jpg`;

      var nav = [
        {
          name: 'Information',
          link: '#information',
        },
        {
          name: 'Opening Times',
          link: '#information',
        },
        {
          name: 'Maps',
          link: '#map',
        }
      ];
      
      content = 
        <div className="cafe">
          <Hero heroUrl={heroUrl} title={item['Name']} rating={item['Editor Rating']} address={item['Address']}/>
          <main>
            <section className="opening-times" id="opening-times">
              <SectionHeader>Opening Times</SectionHeader>
            </section>
            <SectionHeader>Ratings &amp; Information</SectionHeader>
            <section className="information" id="information">
              <p>{item['Website']}</p>
              <p>{item['Description']}</p>
              <p>{item['Closest Station']}</p>
            </section>
            
            <section className="location" id="map">
              Map goes here
            </section>
            <section className="ratings">
              <RatingItem title="Wifi Quality" value={item['Wifi Quality']}></RatingItem>
              <RatingItem title="Ambience" value={item['Ambience']}></RatingItem>
              <RatingItem title="Food/snack selection" value={item['Food/snack selection']}></RatingItem>
              <RatingItem title="Power Outlet" value={item['Power Outlet']}></RatingItem>
              <RatingItem title="Toilet Hygiene" value={item['Toilet hygiene']}></RatingItem>
              <RatingItem title="Ergonomics" value={item['Desk/chair']}></RatingItem>
            </section>
            
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
