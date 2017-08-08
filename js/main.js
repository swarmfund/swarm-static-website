$(function() {
  mainHeaderA();
})

$(window).scroll(function() {
  if ($(this).scrollTop() > 240) {
    // apply effects
    videoSectionA();
  }
  if($(this).scrollTop() > 1000) {
    featuresSectionA();
  }
});

var mainHeaderA = function () {
  $('#mainHeader').fadeIn( 2000, function() {
    // Animation complete
  });
};

var videoSectionA = function() {
  $('#videoInfo').fadeIn( 1800, function() {
    // Animation complete
  });
  $('.videoWrapper').fadeIn( 1800, function(){

  })
}

var featuresSectionA = function() {
  $('#firstFeature').fadeIn( 2400 )
  $('#secondFeature').fadeIn( 3200 )
  $('#thirdFeature').fadeIn( 3800 )
}
