 $(document).ready(function(){
    $('.tabs').tabs();
    $('.sidenav').sidenav();
    $('.button-collapse').sidenav({
      menuWidth: 300, // Default is 240
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
    $('.collapsible').collapsible();
    $('.tooltipped').tooltip();    
  });
 window.onload = function(){
     var timedifference = new Date().getTimezoneOffset();
     var tz = moment.tz.guess();
     // var test = moment(date).offsetUtc()
     // document.getElementById('output').innerHTML = test;
 };


