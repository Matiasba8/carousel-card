var current_element = $('._1');

function disableElement(elem){
  elem.removeClass('active').fadeOut();
  elem.addClass('inactive');
}
function enableElement(elem){
  elem.removeClass('inactive').fadeIn();
  elem.addClass('active');
}

// Right
$('body').on('click', '.forward', function() {
  disableElement(current_element);
  if (!current_element.next().hasClass("card-description")){
    current_element = $('._1')
    enableElement(current_element);
  }
  else{
    current_element = current_element.next();
    enableElement(current_element);
  }
});

// Left
$('body').on('click', '.backwards', function() {
  disableElement(current_element);
  if (!current_element.prev().hasClass("card-description")){
    console.log("last item to back")
    current_element = $('._3')
    enableElement(current_element);
  }
  else{
    console.log("not last item to back")
    current_element = current_element.prev();
    enableElement(current_element);
  }
});
