$(document).ready(function(){

  $('.bxslider').bxSlider({
  auto: true,
  controls: true,
  speed: 2500
  });

	var col_slides = 3;

    var  witdh =  $(window).width();

    console.log(witdh);

    
    if(witdh < 1024)
    {

      col_slides =2;
    }
    if(witdh < 768)
    {

      col_slides =1;
    }


  $('.bxslider1').bxSlider({
  	slideWidth: 570,
     minSlides: col_slides,
     maxSlides: col_slides,
     moveSlides: 1,
     responsive :true,
     auto: true,
     pager:false,
     controls: true,
     slideMargin:3
  });

  // $("#menu").on("click","a", function (event) {
  //       event.preventDefault();
  //       var id  = $(this).attr('href'),
  //           top = $(id).offset().top;
  //       $('body,html').animate({scrollTop: top}, 1500);
  //   });

    $(window).scroll(function() {
      if ($(this).scrollTop() > 1){
      $('nav').addClass("sticky");
      $('nav a').css({'padding':'20px' , 'font-size' : '18px', 'transition': 'all 0.4s ease'});
      }
      else{
      $('nav a').removeClass("sticky");
      $('nav a').css({'padding':'30px' , 'font-size' : '22px','transition': 'all 0.4s ease'});

      }
      });


      
      $("#phone1").mask("38(999) 999-9999");
        
   
       
        $('#three').click(function(){

          if ($(this).prop('checked')==true) {
            
            $('#Email1').css({'display':'block'});
            
          }
          else 
          {
            $('#Email1').css({'display':'none'});
          }
       
        });


        $(".btn-form").click(function() {
          $("#myModal").modal('hide');
          $("#myModal1").modal('show');
        });

      








    });







