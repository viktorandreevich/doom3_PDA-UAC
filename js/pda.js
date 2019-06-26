(function($){
	/*Widjets space*/
	var widjets_space  = '.nb-pda-widjets-space',  // Контейнер для виджетов
      user_id_title  = '.vt-w-userid',           // Титульная надпись
      velum_top 	   = '.nb-velum-top',          // Верхняя створка
      velum_bottom   = '.nb-velum-bottom',       // Надпись "NB-PDA" КНОПКА
      velum_center   = '.nb-velum-center',       // Нижняя створка
      left_menu_btn_square = '.nb-pda-menu-chi'; // Квадрат

    // ---------------------------------------------------------------------
    	function init(options){
        var pda_base = $("<div>",{
            class: "nb-pda-velum",
            append: $("<div>",{
              class: "nb-velum-top",
              append: $("<div>",{class: "nb-velum-base-top"})
              .add("<div>",{
                class: "nb-velum-bord",
                append: $("<div>",{class: "vt-wrapper-inner _bg-0"})
                .add("<div>",{
                  class: "vt-wrapper-inner _bg-1",
                  append: $("<div>",{class: "vt-w-br0"})
                  .add("<div>",{
                    class: "vt-w-userid",
                    append: $("<div>",{
                      append: $("<span>",{class: "uid_title", text: "Помощник по работе с личными данными"})
                      .add("<div>",{
                          css:{"marginLeft": "354px"},
                          append: $("<span>",{class: "uid_uacid", text: "nb-id 134981"})
                      })
                    })
                  })
                })
                .add("<div>",{class: "vt-wrapper-inner _bg-2"})
              })
            })
            .add("<div>",{
              class: "nb-velum-center",
              append: $("<span>",{
                text: "PDA-UAC"
              }) 
            })
            .add("<div>",{
              class: "nb-velum-bottom",
              append: $("<div>",{
                class: "nb-velum-bord", 
                append: $("<div>", {class: "vt-wrapper-inner _bg-3"})
                .add("<div>", {class: "vt-wrapper-inner _bg-4"})
                .add("<div>", {class: "vt-wrapper-inner _bg-5"})
              })
              .add("<div>",{class: "nb-velum-base-bottom"})
            })
        })
        .add("<div>",{
          class: "nb-pda-widjets-space"
        }); 
        return pda_base;
    	}
    // ---------------------------------------------------------------------
    	function open(){
        $(velum_top).css('height','16%');
        $(velum_bottom).css('height','16%');
        $(velum_center).css('opacity','0');
        setTimeout(function(){
          $(user_id_title).css('opacity','1');
          setTimeout(function(){
            $(widjets_space).css('opacity','1');
              show_left_menu($('.nb-pda-melu-left ul > li'));
          }, 300);
        }, 300);
    	}    
    // ---------------------------------------------------------------------
    	function close(){
        var t = 0;
        close_pda_timer = setInterval(function(){    
          if (t < 2){
            if (t == 0){
              hide_left_menu($('.nb-pda-melu-left ul > li'));
            }
            else if(t == 1){
              $(velum_top).css('height','43%');
              $(velum_bottom).css('height','43%');
              $(velum_center).css('opacity','1');
              $(user_id_title).css('opacity','0');
              $(widjets_space).css('opacity','0');
            }
              t = t + 1;
          }
          else {
            clearInterval(close_pda_timer);
          }
        }, 500);  
    	}    
    // ---------------------------------------------------------------------
    	function create_left_menu(itms){
    		// ---------------------------------------------------------------------
        	// :: СОЗДАТЬ МЕНЮ ИЗ СПИСКА ( •_•)
        	// ---------------------------------------------------------------------
    		var lmItms = function(itms){
          		var itm_list = $("<ul>");
          			for (var itm_ind = 0; itm_ind < itms.length; itm_ind++) {
            			itm_list.append($("<li>", {
              				append : $("<div>",{
                				class: "nb-pda-btn btn_i"+itm_ind+((itms[itm_ind].selected) ? " pda-btn-choose":""),
                				append : $("<div>",{class: "nb-pda-se-0"})
                				.add("<div>",{
                  					class:"nb-pda-se-1",
                  					append: $("<div>",{class: "nb-pda-se-1-0"})
                  					.add("<span>",{
                    					class:"nb-pda-se-1-1",
                    					text:itms[itm_ind].itm_lable
                            })
                				})  
              				})
            			}));
          			}
          		return itm_list;
        	}
        	$("<div>",{
          		class: "nb-pda-melu-left",
          		append: lmItms(itms)
          		.add("<div>",{
            		class:"nb-pda-menu-chi"
          		})
        	}).appendTo('.nb-pda-widjets-space');
        	// ---------------------------------------------------------------------
        	// :: АНИМАЦИЯ МЕНЮ ( •_•)
        	// ---------------------------------------------------------------------
        	var btn_list = $('.nb-pda-melu-left').find('.nb-pda-btn'); 	 // Список кнопок
        	var btn_list_cnt =  btn_list.length;                         // Колличество кнопок
        	var sqPos =[2];                                              // Список смещений квадрата

        	for (var i = 0; i < btn_list_cnt; i++) {
          		sqPos.push(parseInt(sqPos.slice(-1))+29);         		 // Смещения
          		var button_click = $('.'+btn_list[i].classList[1]); 	 // Кнопка

          		button_click.click(function(){  						 // Опрос всех кнопок
              		var btn_itm = this.classList[1].match(/\d+/),           // Номер позиции
              			btn_l0 = $('.'+button_click.children()[0].classList[0]), // Линия
              			btn_l1 = $('.'+$(button_click.children()[1]).children()[0].classList[0]), // Полоса
              			btn_sp = $('.'+$(button_click.children()[1]).children()[1].classList[0]); // Текст

              		$(btn_list).removeClass('pda-btn-choose');
              		$(btn_list[btn_itm]).addClass('pda-btn-choose');

              		$(left_menu_btn_square).css('top', sqPos[btn_itm]);  	// Перемещаем квадрат

              		$(btn_l0).css('width', '13px');                		// Возвращаем все линии
              		$(btn_l0[btn_itm]).css('width', '23px');        	// Перемещаем нужную линию

              		$(btn_l1).css({'opacity': '0','margin-left': '0px'})
              		$(btn_l1[btn_itm]).css({'opacity': '1', 'margin-left': '44px'})

              		$(btn_sp).css({'color': '#9eddde', 'margin-right': '10px'})
              		$(btn_sp[btn_itm]).css({'color': 'white', 'margin-right': '-30px'})
          		});
        	}
          
        	/*Кнопка активна*/
        	var btn_itm_def =  $('.pda-btn-choose').get(0).classList[1].slice(-1); // Номер позиции

        	var btn_l0_def = $($('.pda-btn-choose > div')[0]);
        	var btn_l1_def = $($('.pda-btn-choose .nb-pda-se-1 > div')[0]);
        	var btn_sp_def = $($('.pda-btn-choose .nb-pda-se-1 > span')[0]);

        	btn_l0_def.css('width', '23px'); // Линия
        	btn_l1_def.css({'opacity':'1', 'margin-left':'44px'});        // Полоса
        	$(left_menu_btn_square).css('top', sqPos[btn_itm_def]); // Перемещаем квадрат
        	btn_sp_def.css({'margin-right':'-30px', 'color':'white'});
        	/**/
    	}
    // ---------------------------------------------------------------------
    	function show_left_menu(menu){
    		var t = 0;
          	show_menu_timer = setInterval(function(){    
            $(menu[t]).css({
            	'marginLeft':'0px', 
            	'opacity':'1'
            });
            if (t < menu.length){
              t = t + 1;
            }
            else {
              t = menu.length;
              $(left_menu_btn_square).css('opacity','1');
              clearInterval(show_menu_timer);
            }
          }, 100); 
    	}
    // ---------------------------------------------------------------------
    	function hide_left_menu(menu){
    		var t = 0;
          	hide_menu_timer = setInterval(function(){    
            $(menu[t]).css({
            	'marginLeft':'-210px', 
            	'opacity':'0'
            });
            if (t < menu.length){
              t = t + 1;
            }
            else {
              t = menu.length;
              $(left_menu_btn_square).css('opacity','0');
              clearInterval(hide_menu_timer);
            }
          }, 100);  
    	}
  $.fn.extend ({
      pda_init: function(options){
        return $(this).append(init());
      },
      pda_open: function(){  
        return open();
      },
      pda_close: function(){
        return close();
      },
      pda_create_left_menu : function(options){
        options = $.extend({}, $.fn.defaults, options);
        create_left_menu(options.menu_itms)
      },
      pda_widget: function(widget, options){
        $(widjets_space).widjet(widget, options);
      },
      pda_widget_remove: function(){
        $(widjets_space).widjet.rm();
      }
  });

	$.fn.defaults = { 
    menu_itms : [
      { itm_lable : "Вход", selected : 0 },
      { itm_lable : "Регистрация", selected : 1 },
      { itm_lable : "Search by IP", selected : 0 },
      { itm_lable : "check in", selected : 0 },
      { itm_lable : "messageBox", selected : 0 },
      { itm_lable : "Закрыть виджет", selected : 0 },
      { itm_lable : "Загрузка данных", selected : 0 },
      { itm_lable : "Закрыть PDA", selected : 0 }
    ],
    style: "solid",
    class: "pda",
  };

})(jQuery)

$("#pda").pda_init();
$("#pda").pda_create_left_menu();

$('.nb-velum-center span').click(function() {
  $("#pda").pda_open();
});

$($('.nb-pda-melu-left ul > li')[6]).click(function() {
  $("#pda").pdaDataLoader('Загрузка в PDA', 'NerdBox');
});

$($('.nb-pda-melu-left ul > li')[7]).click(function() {
  $("#pda").pda_widget_remove();
  $("#pda").pda_close();
});

$($('.nb-pda-melu-left ul > li')[2]).click(function() {
  $("#pda").pda_widget("searchByIP", {
    w_width: 500,
    w_height: 300,
    w_top: 0.2,
    w_left: 0.2,
    w_space: '.nb-pda-widjets-space'
  });
});

$($('.nb-pda-melu-left ul > li')[4]).click(function() {
  var messageText = 'В игре "DOOM 3 BFG Edition" для получения достижений и более глубокого погружения в сюжет необходимо искать <strong style="color:red;">КПК</strong>, которые разбросаны по уровням, видеодиски и коды от замков на шкафах. В этом руководстве представлены видео, по которым удобно собирать все КПК, видео и коды во всех частях переиздания - "Doom 3", "Doom 3: Resurrection of Evil" и "Doom 3: The Lost Mission".';
  $("body").showMessage(messageText,'A', function(){
    $("body").showMessage("callback",'A');
  });
});

$($('.nb-pda-melu-left ul > li')[3]).click(function() {
  $("#pda").pda_widget("checkIn", {
    w_width: 450,
    w_height: 310,
    w_top: 0.2,
    w_left: 0.2,
    w_space: '.nb-pda-widjets-space'
  });
});

$($('.nb-pda-melu-left ul > li')[5]).click(function() {
$("#pda").pda_widget_remove(); }); 



