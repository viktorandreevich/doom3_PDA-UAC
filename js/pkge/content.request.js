function contentRequest(curLoc, usrData, /*xmlHttpReq,*/ callback){
  $.ajax({
    url: "../../App/porch.php",
        type: "POST",
        data: usrData,
        dataType: 'html',
        /*xhr: function(){
          var xhr = $.ajaxSettings.xhr(); // получаем объект XMLHttpRequest
          xmlHttpReq(xhr);
          return xhr;
        },*/
        success: function(data) {
          callback(data);      
          try {
            history.pushState(null, null, curLoc);
            return;
          } catch(e) {}
          location.hash = '#' + curLoc;      
        },
        error: function(jqXHR, textStatus, errorMessage) {
            $('body').showMessage(errorMessage, 'E');  // Optional 
        }
  });
}

