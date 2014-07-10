function truncate($target,$number_of_lines){
    if ($($target).css("line-height")=='normal') {
        $($target).css("line-height",'1.2');
    }

    var lineHeight = parseInt($($target).css("line-height"),10);
    var number_of_lines =  Math.floor(parseInt($($target).height(),10)/lineHeight)-1
    var text_string = $($target).text();

    if (number_of_lines >= $number_of_lines) {
        var chars_on_one_line = Math.floor(text_string.length/number_of_lines*$number_of_lines*0.82);
        var new_string  = text_string.substr(0,chars_on_one_line);
        var lastIndex   = new_string.lastIndexOf(" ")
        var new_string  = new_string.substring(0, lastIndex);
        
        $($target).text(new_string+"...");
    }
}
    


$(document).ready(function(){
    $('.truncate').each(function() {
        var e = $(this);
        var number_of_lines = e.attr('data-truncate');
        if (!number_of_lines) {
            var number_of_lines = 2;
        }
        truncate(e,number_of_lines);
    });
});
