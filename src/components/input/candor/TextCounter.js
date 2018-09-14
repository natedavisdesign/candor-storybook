import $ from 'jquery';


$(function(){
    $('.count').on('keyup',function(){
        $('.num').html($('.count').val().length);
    })
    
})