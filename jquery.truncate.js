$.fn.truncate = function(value) {
  
  var display_value = value.toFixed(2).replace(".",",");
  this.data("price", value)
  this.text("€ " + display_value)
  
  return this;  
}
