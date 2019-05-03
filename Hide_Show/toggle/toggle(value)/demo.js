$(document).ready(function(){
  $("button").click(function(){
    value=!$("p:visible").length>0;
    $('p').toggle(value);
  });
});

