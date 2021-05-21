var menu = document.getElementById("menu");

menu.addEventListener("mouseover", function() {
  var dropdown = document.getElementById("dropdown");

  if(dropdown.style.display === "none" || menu.style.display == "block") {
    dropdown.style.display = "block";
    menu.style.display = "none";
  }else {
    dropdown.style.display = "none";
    menu.style.display = "block";
  }
});

$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 2000,
});

$('.products-items').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 2,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 2000
});