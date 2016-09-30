import { Template } from 'meteor/templating';

import './home.html';
import '../components/trends.js';



Template.home.helpers({
  generateURL: function (){
    return "http://www.google.com/trends/fetchComponent?hl=en-US&q=pepe%20the%20frog,dat%20boi&cid=TIMESERIES_GRAPH_0&export=5&h=300";
  }
});
