(function($) {

	var widjets = {
      initWidjet: function(options, url, w_data, callback){
        var first_press = 0;
        if($('*').is('.widjet')) {
          first_press = 0;
          //$('.widjet').remove();
        }
        else{
          first_press = 1;
          $("<div>", {
            class: 'widjet',
            css: {
              display: 'flex',
              flexDirection: 'column'
              /*width: '500px'*/
            }
          }).appendTo($(options.w_space));
        }
        $.ajax({
            url: url,
            type: "POST",
            data: w_data,
            dataType: 'html',
          success: function(data) {
            $('.widjet').html(data);
            if(widjets.changingContentAnimation(options, first_press)){ // Анимация появления
              callback();
            } 
          },
          error: function(jqXHR, textStatus, errorMessage) {
            $('body').showMessage(errorMessage, 'E');  // Optional 
          }
        });
      },
      // ---------------------------------------------------------------------
      changingContentAnimation: function(options, first_press){
        var widjet = $('.widjet');
        var widjet_sub_panel = $('.widjet .widjet-sub-panel');
        var widjet_sub_panel_element = $('.widjet .widjet-sub-panel > *');
        var widjet_buttons = $('.widjet .widjet-btn');
        
        if (first_press){
          widjet.css({                          // Исходный стиль виджета
            "opacity": "0.5",
            "width": options.w_width,
            "height": "50px",
            "top": (50 * (1 - options.w_top) + 
              ($(".nb-pda-widjets-space").height()-(options.w_height)) * options.w_top)+"px",
            "margin-left": (270 * (1 - options.w_left) + 
              ($(".nb-pda-widjets-space").width()-(options.w_width)) * options.w_left)+"px"
          });
        }    
        else{
          widjet.css({                          // Исходный стиль виджета
            "opacity": "0.5",
            "width": options.w_width+"px",
            "height": options.w_height+"px",
            "top": (50 * (1 - options.w_top) + 
              ($(".nb-pda-widjets-space").height()-(options.w_height)) * options.w_top)+"px",
            "margin-left": (270 * (1 - options.w_left) + 
              ($(".nb-pda-widjets-space").width()-(options.w_width))* options.w_left)+"px"
          });  
        }
       
        widjet_sub_panel_element.css("opacity", "0");

        widjet_sub_panel.css({
            "opacity": "0",
            "-webkit-transition": "all 1.0s",
            "-moz-transition": "all 1.0s",
            "transition": "all 1.0s"
        });

        var phantom_panel = $("<div>",{         // Фантомная панель
          class: "phantom-panel",
          css:{
            "position": "absolute",
            "top": "0",
            "width": "100%",
            "height": "0%",
            "background": "white",
            "opacity": "0.6",
            "filter": "drop-shadow(0px 0px 27px white)",
            "z-index": "100",
            "display": "block",
            "-webkit-transition": "all .5s",
            "-moz-transition": "all .5s",
            "transition": "all .5s"
          }
        }).appendTo('.widjet .widjet-sub-panel'); 

        setTimeout(function(){
          widjet.css({                          
            "opacity": "1",
            "width": options.w_width+"px",
            "height": options.w_height+"px"
          });
          widjet_buttons.css("opacity", "1");
          widjet_sub_panel.css("opacity", "1");
          setTimeout(function(){
              $(phantom_panel).css({
                "height": "100%",
                "opacity": "0"
              });
              setTimeout(function(){
                widjet_sub_panel_element.css("opacity", "1"); 
                setTimeout(function(){phantom_panel.css("display", "none");},300);
              }, 200); 
          }, 500);      
        }, 500);

        return 1;
      },
      // ---------------------------------------------------------------------
      removeWidjet: function(){
        var widjet = $(".widjet");
        var widjet_sub_panel = $('.widjet .widjet-sub-panel');
        widjet_sub_panel.css("opacity", "0");
        setTimeout(function(){
            widjet.css({
              "opacity": "0.0",
              "width": widjet.width()/3,
              "height": "50px"
            });
          setTimeout(function(){$(".widjet").empty();}, 300); 
        }, 300);     
      },
/*------------------------------------------------------------------------------------------
        ПОИСК ПО IP ( •_•)
------------------------------------------------------------------------------------------*/
  		searchByIP: function(options){
        widjets.initWidjet(options, "App/views/pda/view.widjet.search.ip.php", {
          'controller':'WidjetSearchIp',
          'action':'index'
        }, function(){
          /*МИНИ-КАРТА*/
          var pda_map_marker = $('.wigr-city-search .pda-map-marker'); // Маркер

          /*Перемещение курсора*/
          var mar_move_x = 50; // Центр оси x
          var mar_move_y = 50; // Центр оси y

          var search_frequ = setInterval(function(){
              mar_move_x = Math.random()* (80 - 20) + 20;
              mar_move_y = Math.random()* (80 - 20) + 20;

              pda_map_marker.css('top', mar_move_y+'%');
              pda_map_marker.css('left', mar_move_x+'%');
          }, 300);

          /*СТАТУС БАРЫ (10)*/
          var coBarList = $('.wigr-ava-control .wi-ava-co-bar').children('.co-bar');
          var coBarCnt = coBarList.length; // 10 баров

          var coPhoto = $('.wigr-ava img');
          var coPhotoCnt = 0;

          var barAct_frequ = setInterval(function(){
              for (var i = 0; i < coBarCnt; i++) {
                $(coBarList[i]).css('width', Math.random()*100 + '%');
              }

              coPhoto.attr('src', 'img/pda/widgets/widget_search_ip/faces/f'+coPhotoCnt+'.png');

              if (coPhotoCnt < 10){
                coPhotoCnt++;
              }
              else{
                coPhotoCnt = 0;
              }
          }, 100);

          var ipStatusBar = $('.wigr-status-bar');
          var ipStatusTitle = $('.wigr-status-title');
        
          var stSerch = 0;

          var statusBar_frequ = setInterval(function(){
              ipStatusTitle.html(stSerch+'%');
              ipStatusBar.css('width', stSerch+'%');
              if(stSerch < 100){
                stSerch = stSerch + 10;
              }
              else {
                /*ОШИБКА В СИСТЕМЕ*/
                var msg = 'Система не нашла ваш профиль в базе данных. Для продолжения вам необходимо зарегистрироваться!';
                
                var tic = 0;
                var checkIn_frequ = setInterval(function() {  
                  $('.not-found-usr').css("opacity", tic%2);
                  coPhoto.attr('src', 'img/pda/widgets/widget_search_ip/faces/f'+coPhotoCnt+'.png');
                  clearInterval(search_frequ);
                  clearInterval(barAct_frequ);
                  tic+=1;
                }, 500);

                // через 2 сек остановить повторы
                setTimeout(function() {
                  clearInterval(checkIn_frequ);
                  stSerch = 100;
                  //widjets.removeWidjet();
                  $("#pda").showMessage(msg, 'A', function(){
                     widjets.checkIn({
                      w_width: 450,
                      w_height: 310,
                      w_top: 0.2,
                      w_left: 0.2,
                      w_space: '.nb-pda-widjets-space'
                    });
                  });      
                  stSerch = 100; 
                }, 3000);
                clearInterval(statusBar_frequ);  
              }
          }, 500);
        });
  		},
      checkIn: function(options){
        widjets.initWidjet(options, "App/views/pda/view.widjet.check.in.php", {
          'controller':'WidjetSearchIp',
          'action':'index'
        }, function(){

        });
      }
	}
  // ---------------------------------------------------------------------
	$.fn.widjet = function(widjet, options, callbacks) {
  	$(this).append(widjets[widjet](options));
	};
  $.fn.widjet.rm = function(){
    return widjets.removeWidjet();
  };

})(jQuery);