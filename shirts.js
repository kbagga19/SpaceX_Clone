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

    $('.shop_image1').on({
      'mouseover': function() {
        $(this).toggleClass('faltu');
      },
      'mouseout': function() {
        $(this).removeClass('faltu');
      }
    });
  });
  
  const setHover = () =>{
    console.log("hello");
  }
  
  const buildContainer = ()=>{
  const container = document.getElementById("grid-container");
  const element = `<div class="individual-container"><a href="/index/product.html">
  <img class="img1"  src="/assets/shop_image1.png" alt="error">`;

  const element2 = `<p class="individual-container-title">MEN'S STARLINK T-SHIRT</p>
  <p>$30</p></a>
</div>`


  let filledContainer = "";
  
  for (let index = 0; index < 14; index++) {
  filledContainer+= element ;
  filledContainer+= `<img  class="shop_image1" id="image-${index}" src="/assets/shop_image1_a.png" alt="error">`
  filledContainer+= element2 ;
  }
  container.innerHTML = filledContainer ;

}

buildContainer() ;
