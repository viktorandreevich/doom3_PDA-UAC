(function ($){
	var loader = {
		load: function(pro, per, load_type = 'default'){
			if($('*').is('.nb-pda-data-loader-container')) {
          $('.nb-pda-data-loader-container').remove();
      }
			var data_loader_html = $("<div>",{
				class: "nb-pda-data-loader-container",
				css: {
  					"position": "absolute",
  					"top": "75%",
  					"left": "50%",
    				"margin-right": "-50%",
  					"transform": "translate(-50%, -50%)",
  					"z-index": "5000",
  					"opacity": 0,
  					"-webkit-transition": "all .5s",
            "-moz-transition": "all .5s",
            "transition": "all .5s"
				}
			});

			$.ajax({
          url: "/App/views/pda/view.pda.data.loader.php",
          type: "POST",
          data: {
					    'process':pro,
					    'perform':per
				  },
          dataType: 'html',
          success: function(data) {
          		data_loader_html.append(data);
          		data_loader_html.css("opacity", 1);

              if (load_type == 'default'){
                  loader.animate({
                      duration: 2000,
                      timing: function(timeFraction) {
                          if (timeFraction == 1){
                              loader.flash();
                              loader.closed(data_loader_html);                              
                          }
                        return timeFraction;
                      },
                      draw: function(progress) {
                          data_loader_html.find('.npdl-loading-bar').css("width", progress * 100 + "%");
                      }
                  });
              }
              else{
                // Тут происходит подсчет размера загружаемого контента 
              }
          },
          error: function(jqXHR, textStatus, errorMessage) {
            	$('body').showMessage("DataLoaderError: [ <span style='color: green'>"+errorMessage+" </span>]", 'E');  // Optional 
          }
      });

      return data_loader_html;
		},
		animate: function (options) {
  			var start = performance.now();
  			requestAnimationFrame(function animate(time) {
    			// timeFraction от 0 до 1
    			var timeFraction = (time - start) / options.duration;
    			if (timeFraction > 1) timeFraction = 1;

    			// текущее состояние анимации
    			var progress = options.timing(timeFraction)

    			options.draw(progress);

    			if (timeFraction < 1) {
      				requestAnimationFrame(animate);
    			}
  			});
		},

    flash: function(){
      var flash_tik = 0;

      var pda_indicator = $("<div>",{
        class: "pda-message-indicator-container",
        css:{
          "position": "absolute",
          "width": "48px",
          "height": "48px",
          "top": "78%",
          "filter": "drop-shadow(0px 0px 1px black)",
          "opacity": "0",
          "-webkit-transition": "all .5s",
          "-moz-transition": "all .5s",
          "transition": "all .5s"
        },
      })
      $("<div>",{
          class: "pda-message-indicator",
          css:{
            "width": "100%",
            "height": "100%",
            "background-size": "100%",
            "background-image": "url(img/pda/pda/pda.png)"         
        },
      }).appendTo(pda_indicator);

      $(".nb-pda-widjets-space").append(pda_indicator);

      var pda_flashing = setInterval(function(){
        flash_tik = flash_tik + 1;
        pda_indicator.css("opacity", (flash_tik%2)*0.8);
        if (flash_tik >= 6){
          setTimeout(function(){
            clearInterval(pda_flashing);
            pda_indicator.remove();
          },600) 
        }
      }, 600);
    },

    closed: function (html){
        var npdl_frame0 = html.find('.npdl-frame0');
        var npdl_frame1 = html.find('.npdl-frame1');
        npdl_frame1.css({
            "opacity": "1",      
        });
        var data_loader_out_frequ = setInterval(function(){
            html.css({
                "opacity": "0",
                "left": "20%",
                "-webkit-transition": "all .4s",
                "-moz-transition": "all .4s",
                "transition": "all .4s"
            });
            html.find('p').css({
                "opacity": "0"
            });
            npdl_frame0.css({
                "width": "50px",
                "-webkit-transition": "all .4s",
                "-moz-transition": "all .4s",
                "transition": "all .4s"
            });
            npdl_frame1.css({
                "transform": "scale(1.6)",
                "opacity": "0"  
            });
            setTimeout(function(){
                html.remove();
                clearInterval(data_loader_out_frequ);
            }, 400); // Время удаления элемента DOM (0.4с)
        },400);      // Время наступления анимации после 100% (0.4с)
    }
	}

	$.fn.pdaDataLoader = function(pro, per, load_type) {
  		$(this).append(loader.load(pro, per, load_type));
	};
})(jQuery)