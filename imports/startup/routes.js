import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import layout
import '../ui/layout/applicationLayout.js';

// Import pages
import '../ui/pages/home.js';
import '../ui/pages/termsOfService.js';

FlowRouter.route('/',{
  action: function(){
    // Renders when the http://app.com/ route is hit
    console.log("In the Home Page!");
    // Render the home page
    // /imports/ui/pages/home.html
    BlazeLayout.render('applicationLayout', { main: 'home' });
  },
  name: 'home'
})

FlowRouter.route('/terms', {
  action: function(){
    // This stuff happens when we visit http://app.com/terms
    console.log("In the Terms of Service Page!");
    // Render the terms of service page
    // /imports/ui/pages/termsOfService.html
    BlazeLayout.render('applicationLayout', { main: 'termsOfService' });
  },
  name: 'termsOfService' // Optional route name
})
