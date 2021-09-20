// JavaScript Document

$(function() {

$(".dtl-box h5 a").click(function(){
  $(this).closest(".dtl-box").addClass("edit");
});
$(".inpt button").click(function(){
  $(this).closest(".dtl-box").removeClass("edit");
});
    
    
});/*-------------End document ready-----------*/