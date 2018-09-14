import $ from 'jquery';


$(function(){
    $('.count').on('keyup',function(){
        $('.num').html($('.count').val().length);
    })
    
})

/*count.addEventListener(keyup, eventHandler);
num.innerHTML

var calculaRestante = function (element) {
    "use strict";
    var maxlength = element.getAttribute("maxlength");
    var caracteres = element.value.length;
    var restante = maxlength - caracteres;
  document.getElementById("counter").innerHTML = restante;
};

function countText(text, counter, max) {
    // if text too long, cut it to max length
    if (text.value.length > max)
      text.value = text.value.substring(0, max);
    // update counter
    else
      counter.value = max - text.value.length;
  }*/