$(function(){
  $.ajax({
    url:"../header.html",
    type:"get",
    success:function(html){
      $(html).replaceAll("#header");
      $(`<link rel="stylesheet" href="../../CSS/header.css"/>`).appendTo("head")
    }
  })
})
