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
    //var url = "http://www.google.com/trends/embed/fetchComponent?hl=en-US&q=" + term + "&cid=TIMESERIES_GRAPH_0&export=5&h=500";
  //  var url = "https://www.google.com/trends/embed/explore/TIMESERIES?req=%7B%22comparisonItem%22%3A%5B%7B%22keyword%22%3A%22pepe%20the%20frog%22%2C%22geo%22%3A%22%22%2C%22time%22%3A%22today%205-y%22%7D%5D%2C%22category%22%3A0%2C%22property%22%3A%22%22%7D&tz=240";
//https://www.google.com/trends/embed/explore/TIMESERIES?req=%7B%22comparisonItem%22%3A%5B%7B%22keyword%22%3A%22pepe%20the%20frog%22%2C%22geo%22%3A%22%22%2C%22time%22%3A%22today%205-y%22%7D%5D%2C%22category%22%3A0%2C%22property%22%3A%22%22%7D&amp;tz=240" width="100%" frameborder="0" scrolling="0" style="border-radius: 2px; box-shadow: rgba(0, 0, 0, 0.117647) 0px 0px 2px 0px, rgba(0, 0, 0, 0.239216) 0px 2px 2px 0px; height: 384px; width: 1000px
  //  var url = "https://www.google.com/trends/embed/explore/TIMESERIES?req=%7B%22comparisonItem%22%3A%5B%7B%22keyword%22%3A%22" + term + "%22%2C%22geo%22%3A%22%22%2C%22time%22%3A%22today%205-y%22%7D%5D%2C%22category%22%3A0%2C%22property%22%3A%22%22%7D&amp;tz=240";
    Session.set("searchURL",term);
    return term;
  },
  searchTerm: function(){
    return Session.get("searchTerm");
  },
  fullURL: function(){
    return Session.get("searchURL");
  },
})
