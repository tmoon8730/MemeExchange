import { Template } from 'meteor/templating';

import './home.html';
import '../components/trends.js';



Template.home.helpers({
  generateURL: function (){
    return "pepe%20the%20frog";
  },
  generateURL2: function (){
    return "harambe";
  },
  generateURL3: function (){
    return "sanic";
  },
});
