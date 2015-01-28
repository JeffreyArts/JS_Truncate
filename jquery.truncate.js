$.fn.truncate = function(value) {
  
  if (this.css("line-height")=='normal') {
    this.css("line-height",'1.2');
  }
  
  var lineHeight = parseInt(this.css("line-height"),10);
  var number_of_lines = Math.floor(parseInt(this.height(),10)/lineHeight)-1
  var text_string = this.text();
  if (number_of_lines >= $number_of_lines) {
    var chars_on_one_line = Math.floor(text_string.length/number_of_lines*$number_of_lines*0.82);
    var new_string = text_string.substr(0,chars_on_one_line);
    var lastIndex = new_string.lastIndexOf(" ")
    var new_string = new_string.substring(0, lastIndex);
    this.text(new_string+"...");
  }
  
  return this;  
}

$(document).ready(function(){
  $('*[data-truncate-lines]').each(function() {
    var $this = $(this);
    var number_of_lines = $this.attr('data-truncate-lines');
    if (!number_of_lines) {
      var number_of_lines = 2;
    }
    $this.truncate(number_of_lines);
  });
});
