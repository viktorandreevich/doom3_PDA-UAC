
(function($){
	var helpers = {
		set_message: function(message, messageType, callback = function(){return 0;}){

			var messageBox = $("<div>", {
				class: "message_box",
				css:{
					"position": "absolute",
					"display": "block",
					"float": "left",
					"max-width": "40.5em",
					"z-index": "1000",
					"top": "50%",
  					"left": "50%",
  					"margin-right": "-50%",
  					"opacity": "0",
  					"transform": "translate(-50%, -50%)",
  					"-webkit-transition": "all 0.5s cubic-bezier(.68,-0.55,.27,1.55) 0s",
                    "-moz-transition": "all 0.5s cubic-bezier(.68,-0.55,.27,1.55) 0s",
      				"transition": "all 0.5s cubic-bezier(.68,-0.55,.27,1.55) 0s"
				}
			});

			if($('*').is('.message_box')) {$('.message_box').remove();}


			$.ajax({
            	url: "App/views/view.message-box.php",
            	type: "POST",
            	dataType: 'html',
          		success: function(data) {
            		messageBox.html(data);

            		/*Тип сообщения*/
            		var messageTitle = messageBox.find(".message-title span");
            		switch(messageType){
						case 'E':{
							messageTitle.html("ОШИБКА");
							messageTitle.css("color", "salmon");
							break;
						}
						case 'W':{
							messageTitle.html("ПРЕДУПРЕЖДЕНИЕ");
							messageTitle.css("color", "gold");
							break;
						}
						case 'A':{
							messageTitle.html("ВНИМАНИЕ");
							messageTitle.css("color", "yellowgreen");
							break;
						}
					}
					/*Текст сообщения*/
            		var messageText = messageBox.find(".message-text span");
            		messageText.html(message);

            		/*При клике по нему, окно закрывается через секунду*/
            		var messageOK = $(".message_box .widjet-btn-ok");

            		messageOK.click(function(){
            			messageBox.css("opacity", "0");
						setTimeout(function(){
							callback();		
							messageBox.remove();
						}, 500);
            		});

            		messageBox.css("opacity", "1");

          		},
          		error: function(jqXHR, textStatus, errorMessage) {
            		$('body').showMessage(errorMessage, 'E');  // Optional 
          		}
        	});
			return messageBox;
		}
	}
	$.fn.showMessage = function(message, type, callback){
		$(this).append(helpers.set_message(message, type, callback));
	};
})(jQuery);