import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: '/marty/'
});

Router.map(function() {
  this.route('index', { path: '/' });
});

export default Router;
