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
        $('#drop1').removeClass('dropdown_menu_show');
    }
  });

  $('#Womens').on({
    'mouseover': function() {
      $('#drop2').toggleClass('dropdown_menu_show');
    }, 
    'mouseout' : function() {
        $('#drop2').removeClass('dropdown_menu_show');
    }
  });

  $('#Kids').on({
    'mouseover': function() {
      $('#drop3').toggleClass('dropdown_menu_show');
    }, 
    'mouseout' : function() {
        $('#drop3').removeClass('dropdown_menu_show');
    }
  });

  $('#Acc').on({
    'mouseover': function() {
      $('#drop4').toggleClass('dropdown_menu_show');
    }, 
    'mouseout' : function() {
        $('#drop4').removeClass('dropdown_menu_show');
    }
  });

  $('#Pre').on({
    'mouseover': function() {
      $('#drop5').toggleClass('dropdown_menu_show');
    }, 
    'mouseout' : function() {
        $('#drop5').removeClass('dropdown_menu_show');
    }
  });
});

const setOpacityOver1 = () =>{
  const womenImage = document.getElementById("womens_img");
  womenImage.style.transform = "scale(1.3)";
}

const setOpacityOut1 = () =>{
  const womenImage = document.getElementById("womens_img");
  womenImage.style.transform = "scale(1)";
}

const setOpacityOver2 = () =>{
  const womenImage = document.getElementById("mens_img");
  womenImage.style.transform = "scale(1.3)";
}

const setOpacityOut2 = () =>{
  const womenImage = document.getElementById("mens_img");
  womenImage.style.transform = "scale(1)";
}

const setOpacityOver3 = () =>{
  const womenImage = document.getElementById("accessories_img");
  womenImage.style.transform = "scale(1.3)";
}

const setOpacityOut3 = () =>{
  const womenImage = document.getElementById("accessories_img");
  womenImage.style.transform = "scale(1)";
}