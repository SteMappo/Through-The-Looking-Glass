//OWL CAROUSEL BOOKS
jQuery(document).ready(function($) {
  // SideBar

    $('a[href="#search"]').on('click', function(event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('#search > form > input[type="search"]').focus();
    });
    
    $('#search, #search button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    
    
    //Do not include! This prevents the form from submitting for DEMO purposes only!
    $('form').submit(function(event) {
        event.preventDefault();
        return false;
    });

    var owlOne = $(".owl-carousel-test");
    owlOne.owlCarousel({
      smartSpeed: 1000,
      autoplay: true,
      autoplayTimeout: 7000,
      loop: true,
      center:true,
      // nav : true,
      // navText : ["<i class='fa fa-arrow-circle-left'></i>","<i class='fa fa-arrow-circle-right'></i>"],
      dots : true,
      responsive:{
      0:{ items:1 },
      600:{ items:1 },
      767:{ items:1 },
      991:{ items:1 }
      }
    });
// Gallary 
    var owlTwo = $(".owl-carousel-gallary");
    owlTwo.owlCarousel({
      smartSpeed: 1000,
      autoplay: true,
      autoplayTimeout: 7000,
      loop: true,
      nav:true,
      navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      responsive:{
      0:{ items:1 },
      600:{ items:1 },
      767:{ items:1 },
      991:{ items:1 }
      }
    });

    var owlThree = $(".owl-carousel-books");
    owlThree.owlCarousel({
      smartSpeed:1000,
      autoplay:true,
      loop:true,
      nav:true,
      navText:["<i class='fa fa-arrow-circle-o-left'></i>","<i class='fa fa-arrow-circle-o-right'></i>"],
      responsive:{
      0:{ items:1 },
      600:{ items:2 },
      767:{ items:3 },
      991:{ items:4 }
      }
    });

      if(owlTwo.length > 0) {
  
          // 1) ASSIGN EACH 'DOT' A NUMBER
        dotcount = 1;
     
        $('.owl-dot', owlTwo).each(function() {
          $( this ).addClass( 'dotnumber' + dotcount);
          $( this ).attr('data-info', dotcount);
          dotcount=dotcount+1;
        });
        
         // 2) ASSIGN EACH 'SLIDE' A NUMBER
        slidecount = 1;
     
        $('.owl-item', owlTwo).not('.cloned').each(function() {
          $( this ).addClass( 'slidenumber' + slidecount);
          slidecount=slidecount+1;
        });
        
        // SYNC THE SLIDE NUMBER IMG TO ITS DOT COUNTERPART (E.G SLIDE 1 IMG TO DOT 1 BACKGROUND-IMAGE)
        $('.owl-dot', owlTwo).each(function() {
        
            grab = $(this).data('info');

            slidegrab = $('.slidenumber'+ grab +' img').attr('src');
            console.log(slidegrab);

            $(this).css("background-image", "url("+slidegrab+")");  

        });
        
        // THIS FINAL BIT CAN BE REMOVED AND OVERRIDEN WITH YOUR OWN CSS OR FUNCTION, I JUST HAVE IT
          // TO MAKE IT ALL NEAT 
        amount = $('.owl-dot', owlTwo).length;
        gotowidth = 5+amount;
        $('.owl-dot', owlTwo).css("width", gotowidth+"%");
        $('.owl-dot', owlTwo$).css("height", 60+"px");
        
      }

// MOBILE MENU
    $(".btn-menu").click(function () {
        $('.nav').slideToggle('.nav');
      $('.fa', this).toggleClass('fa-bars').toggleClass('fa-times');
        return false;
    });
// Tabs Standard
    $('#myTabs a[href="#one"]').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
  })
      $('#myTabs a[href="#two"]').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
  })
      $('#myTabs a[href="#three"]').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
  })
      $('#myTabs a[href="#four"]').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

//       $('#headingOne a').click(function () {
// if($(' i').hasClass('fa fa-minus'))
// {
//     $('#headingOne a').html('<i class="fa fa-minus" aria-hidden="true"></i>'); 
// }
// else
// {      
//     $('#headingOne a').html('<i class="fa fa-plus" aria-hidden="true"></i>'); 
// }
// }); 

// active class 
var selector = '.standard-internal-page .panel-group .panel-heading';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});

  });
// accodian plus & minus 
     function toggleIcon(e) {
 
        $(e.target)
 
            .prev('.panel-heading')
 
            .find(".short-full")
 
            .toggleClass('glyphicon-plus glyphicon-minus');
 
    }
 
    $('.accordian').on('hidden.bs.collapse', toggleIcon);
 
    $('.accordian').on('shown.bs.collapse', toggleIcon);
  if ($(document).scrollTop() > 50) {
    $('header').addClass('shrink');
  } else {
    $('header').removeClass('shrink');
  }

