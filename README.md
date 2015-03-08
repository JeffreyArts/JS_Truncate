jQuery Truncate
===========

This plugin is used for truncating text with javascript based on the number of lines (not characters). Which is very usefull for designs where you only want to display - for example - 4 lines of text. It is re-adjusted to make it usefull for responsive designs and is really easy to use.

How to use
--------
You can use it by simply adding a data attribute named "truncate" and set a numeric value for the number of lines.
<br><br>

###HTML<br>
```
<p data-truncate="2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis eius ducimus exercitationem molestiae corporis optio accusamus ipsa. Nobis sapiente aperiam dignissimos voluptates mollitia sint, blanditiis sequi eos, velit laboriosam dolorem!</p>
```

###JS
```
$(document).ready(function(){
  truncateAll();
});
```
Execute truncate on document load
<br>
```
$( window ).resize(function() {
  truncateAll();
});
```
Execute truncate on window resize

<br>
[Live Example](http://www.jeffreyarts.nl/dashboard/project/truncate/)
-------
<br>
License
-------

Available under the MIT license. See LICENSE file for details.
