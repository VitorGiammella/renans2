import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contact');
  this.route('navbar');
  this.route('about');

  this.route('foods', function(){
   this.route('food', function(){
     this.route('eating');
   });
 });
  //this.route('food', {path: 'food/:name'});

  this.route('chefs');
  this.route('chef', {path: 'chef/:name'});
  this.route('edit-food', {path: 'edit-food/:name'});
  this.route('edit-chef', {path: 'edit-chef/:name'});
  this.route('new-chef');
  this.route('new-food');

  this.route('page-not-found', { path: '/*wildcard'});
  this.route('minions', function() {
    this.route('minions');
  });
});

export default Router;
