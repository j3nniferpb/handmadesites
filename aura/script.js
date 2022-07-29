$(function() {
	$( ".draggable" ).draggable();
});

//this randomly positions the elements even before they are revealed
$(document).ready(function () {
    $(".random").each(function () {
        var randomtop = Math.floor(Math.random() * ($(window).height() - $(this).height() - 20)),
            randomleft = Math.floor(Math.random() * ($(window).width() - $(this).width() - 20)),
            randomzindex = Math.floor(Math.random() * 30);
        $(this).css({
            "top": randomtop,
            "left": randomleft,
            "z-index": randomzindex
        });
    });
});

//this looks for when the button is clicked and adds the show class to each element in increments
jQuery($ => {
  $("#ny_metro").click(function() {
    var $target = $('.ny1.show').next();
    if ($target.length === 0)
      $target = $('.ny1:first');
      
    $target.addClass('show');
  });
});

jQuery($ => {
    $("#boston_charlie").click(function() {
      var $target = $('.boston1.show').next();
      if ($target.length === 0)
        $target = $('.boston1:first');
        
      $target.addClass('show');
    });
  });

  jQuery($ => {
    $("#united").click(function() {
      var $target = $('.nj1.show').next();
      if ($target.length === 0)
        $target = $('.nj1:first');
        
      $target.addClass('show');
    });
  });

  jQuery($ => {
    $("#cash").click(function() {
      var $target = $('.rva1.show').next();
      if ($target.length === 0)
        $target = $('.rva1:first');
        
      $target.addClass('show');
    });
  });

  jQuery($ => {
    $("#amtrak").click(function() {
      var $target = $('.dc1.show').next();
      if ($target.length === 0)
        $target = $('.dc1:first');
        
      $target.addClass('show');
    });
  });


// this will randomly order any children 
// of an element with the class "random-list"
var random = document.querySelector('.random-list');
for (var i = random.children.length; i >= 0; i--) {
  random.appendChild(random.children[Math.random() * i | 0]);
}

console.log("hello")