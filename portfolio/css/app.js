var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');
var b = document.querySelectorAll('h3');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
  })
  
b.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hoverWater');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hoverWater');
  });
  })
  window.requestAnimationFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var speed = 5000;
(function currencySlide(){
    var currencyPairWidth = $('span:first-child').outerWidth();
    $(".marquee").animate({marginLeft:-currencyPairWidth},speed, 'linear', function(){
      $(this).css({marginLeft:0}).find("span:last").after($(this).find("span:first"));
        });
        requestAnimationFrame(currencySlide);
})();

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
(function() {

  var slidersContainer = document.querySelector('.sliders-container');

  // Initializing the numbers slider
  var msNumbers = new MomentumSlider({
      el: slidersContainer,
      cssClass: 'ms--numbers',
      range: [1, 4],
      rangeContent: function (i) {
          return '0' + i;
      },
      style: {
          transform: [{scale: [0.4, 1]}],
          opacity: [0, 1]
      },
      interactive: false
  });

  // Initializing the titles slider
  var titles = [
      'King of the Ring Fight',
      'Sound of Streets',
      'Urban Fashion',
      'Windy Sunset'
  ];
  var msTitles = new MomentumSlider({
      el: slidersContainer,
      cssClass: 'ms--titles',
      range: [0, 3],
      rangeContent: function (i) {
          return '<h3>'+ titles[i] +'</h3>';
      },
      vertical: true,
      reverse: true,
      style: {
          opacity: [0, 1]
      },
      interactive: false
  });

  // Initializing the links slider
  var msLinks = new MomentumSlider({
      el: slidersContainer,
      cssClass: 'ms--links',
      range: [0, 3],
      rangeContent: function () {
          return '<a class="ms-slide__link">View Case</a>';
      },
      vertical: true,
      interactive: false
  });

  // Get pagination items
  var pagination = document.querySelector('.pagination');
  var paginationItems = [].slice.call(pagination.children);

  // Initializing the images slider
  var msImages = new MomentumSlider({
      // Element to append the slider
      el: slidersContainer,
      // CSS class to reference the slider
      cssClass: 'ms--images',
      // Generate the 4 slides required
      range: [0, 3],
      rangeContent: function () {
          return '<div class="ms-slide__image-container"><div class="ms-slide__image"></div></div>';
      },
      // Syncronize the other sliders
      sync: [msNumbers, msTitles, msLinks],
      // Styles to interpolate as we move the slider
      style: {
          '.ms-slide__image': {
              transform: [{scale: [1.5, 1]}]
          }
      },
      // Update pagination if slider change
      change: function(newIndex, oldIndex) {
          if (typeof oldIndex !== 'undefined') {
              paginationItems[oldIndex].classList.remove('pagination__item--active');
          }
          paginationItems[newIndex].classList.add('pagination__item--active');
      }
  });

  // Select corresponding slider item when a pagination button is clicked
  pagination.addEventListener('click', function(e) {
      if (e.target.matches('.pagination__button')) {
          var index = paginationItems.indexOf(e.target.parentNode);
          msImages.select(index);
      }
  });

})();
