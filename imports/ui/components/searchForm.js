import { Template } from 'meteor/templating';
import './searchForm.html';

var searchTerm = "";

Template.searchForm.events({
  'submit form': function(event){
    event.preventDefault();
    searchTerm = event.target.playerName.value;
    console.log(searchTerm);
  },
})

Template.searchForm.helpers({
  generateURL: function(){
    console.log(searchTerm);
    return "http://www.google.com/trends/fetchComponent?hl=en-US&q=pepe%20the%20frog,dat%20boi&cid=TIMESERIES_GRAPH_0&export=5&h=500";
  }
})
