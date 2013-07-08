$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {
    $('#awesomeness_holder').text($(this).data().heading)
  });

  $('.skill_teller').on('click', function() {
    var skill = window.location.pathname.split('/')[2];
    $('#skill_holder').text(skill)
  })

  $('.meal_teller').on('click', function() {
    var length = $(this).data().meals.length
    var index_length = length - 1
    var random_index = Math.floor(Math.random() * index_length)
    $('#meal_holder').text($(this).data().meals[random_index])
  });

  $('html').css('background-color', $('#cookie_color').text())

  // What other events do you need to bind to make the other pages work?
});
