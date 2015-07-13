var _ = require('lodash'),
  moment = require('moment'),
  browserStore = require('store');

import { Flux, Store, Actions } from 'flummox';
import FluxComponent from 'flummox/component';

import { Tabletop } from 'tabletop';

var utils = require('./utils');


const SPREADSHEET_URL = "https://docs.google.com/spreadsheets/d/17EzWbGUykvBOcy6KZsjJy15jnvfuprmrk5OmBe3oOws/pubhtml?gid=0&single=true";

const CACHE_ENABLED = false;


class AppActions extends Actions {
  loadDatabase() {
    return {};
  }
  setView(viewType) {
    return viewType;
  }
}


class AppStore extends Store {
  constructor(flux) {
    super();

    this.flux = flux;

    const actionIds = this.flux.getActionIds('app');

    _.forEach(actionIds, function(aid, key) {
      this.register(aid, this[key]);
    }, this);

    this.state = {
      appDatabase: null,
      appViewType: 'listing',
    };
  }

  loadDatabase () {
    // check cache?
    if (CACHE_ENABLED) {
      var data = browserStore.get('database');

      // if cache set
      if (data && data.updated && data.entries) {
        if (1 > moment().diff(data.updated, 'hours')) {
          console.log('Cached data available');

          return this.setState({
            appDatabase: data.entries
          });
        }
      }
    }

    console.log('Loading spreadsheet data');

    Tabletop.init({ 
      key: SPREADSHEET_URL,
      callback: _.bind(function(data, tabletop) {
        var objData = {};
        data.forEach( (d) => {
          var parsed = this._parse(d);

          objData[parsed.slug] = parsed;
        });

        console.log('Got entries', objData);

        this.setState({
          appDatabase: objData,
        });

        if (CACHE_ENABLED) {
          browserStore.set('database', {
            updated: new Date(),
            entries: objData,
          });
        }

      }, this),
      callbackContext: this,
      simpleSheet: true
    });
  }

  setView (viewType) {
    this.setState({
      viewType: viewType
    });
  }


  _parse (item) {
    var ret = {};

    var keys = Object.keys(item);

    keys.forEach((key) => {
      var slugified = utils.slugify(key);

      switch (slugified) {
        case 'opening_times':
          ret[slugified] = utils.parseOpeningTimes(item[key]);
          break;
        case 'affordability':
          ret[slugified] = utils.parseAffordability(item[key]);
          break;
        default:
          ret[slugified] = item[key];
      }
    });

    return ret;
  }


}



export class FluxManager extends Flux {
  constructor() {
    super();

    this.createActions('app', AppActions);
    this.createStore('app', AppStore, this);
  }
}



exports.FluxComponent = FluxComponent;

