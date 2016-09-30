import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import './searchForm.html';


this.searchTerm = "";

Template.searchForm.events({
  'submit form': function(event){
    event.preventDefault();
    searchTerm = event.target.playerName.value;
    console.log(searchTerm);
    Session.set("searchTerm", searchTerm);
  },
})

Template.searchForm.helpers({
  generateURL: function(){
    if(Session.get("searchTerm") !== undefined || Session.get("searchTerm") !== ""){
          var term = Session.get("searchTerm").replace(' ', "%20");
    }
    console.log("term = " + term);
    var url = "http://www.google.com/trends/fetchComponent?hl=en-US&q=" + term + "&cid=TIMESERIES_GRAPH_0&export=5&h=500";
    Session.set("searchURL",url);
    return url;
  },
  searchTerm: function(){
    return Session.get("searchTerm");
  },
  fullURL: function(){
    return Session.get("searchURL");
  },
})
