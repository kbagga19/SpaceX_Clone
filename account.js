$(document).ready(function(){

    $('.navright__small1').click(function() {
      $('.searchbox').toggleClass('search_shown');
      $('body').toggleClass('yhide');
      $('.opacity__search').toggleClass('opacity');
    });
  
    $('#cross').click(function() {
      $('.searchbox').removeClass('search_shown');
      $('.opacity__search').removeClass('opacity');
    });
  
    $('#Mens').on({
      'mouseover': function() {
        $('#drop1').toggleClass('dropdown_menu_show');
      }, 
      'mouseout' : function() {
        timer = setTimeout(function () {
          // do stuff
          $('#drop1').removeClass('dropdown_menu_show');
        }, 4000);
      }
    });
  
    $('#Womens').on({
      'mouseover': function() {
        $('#drop2').toggleClass('dropdown_menu_show');
      }, 
      'mouseout' : function() {
        timer = setTimeout(function () {
          // do stuff
          $('#drop2').removeClass('dropdown_menu_show');
        }, 4000);
      }
    });
  
    $('#Kids').on({
      'mouseover': function() {
        $('#drop3').toggleClass('dropdown_menu_show');
      }, 
      'mouseout' : function() {
        timer = setTimeout(function () {
          // do stuff
          $('#drop3').removeClass('dropdown_menu_show');
        }, 4000);
      }
    });
  
    $('#Acc').on({
      'mouseover': function() {
        $('#drop4').toggleClass('dropdown_menu_show');
      }, 
      'mouseout' : function() {
        timer = setTimeout(function () {
          // do stuff
          $('#drop4').removeClass('dropdown_menu_show');
        }, 4000);
      }
    });
  
    $('#Pre').on({
      'mouseover': function() {
        $('#drop5').toggleClass('dropdown_menu_show');
      }, 
      'mouseout' : function() {
        timer = setTimeout(function () {
          // do stuff
          $('#drop5').removeClass('dropdown_menu_show');
        }, 4000);
      }
    });
  });
