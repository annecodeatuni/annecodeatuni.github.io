$(function () {
  $(document).scroll(function () {
  		console.log("hi")
	  var $nav = $(".fixed-top");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});

