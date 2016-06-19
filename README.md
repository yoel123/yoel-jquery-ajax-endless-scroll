this is a simple jquery endless scroll function.
<br>
what it dose is load content into a dom element via ajax call, when the user scroll to a  defined scroll point.

see the example (index.html) on how it works.<br>

	y_endless_scroll(selector,url,scroll_val,preload_selector,max)
<br>

note:it needs a server to work.

lets break the arguments:

*selector:<br>
the selector of the dom element that will be populated by the ajax call.<br>
*url:<br>
the url of the page the ajax call will call.<br>
*scroll_val:<br>
the scroll point that will activate the the ajax call that will load new data.
<br>

*preload_selector:<br>
the preloader dom element that will be shown while the new data loads.<br>

*max:<br>

the maximum times the function will run.
<br>

for pagination or any other incremented data your backend code needs i use session or cookies to keep track of how many times the backend page was called via ajax.

see it in action:

https://cdn.rawgit.com/yoel123/yoel-jquery-ajax-endless-scroll/master/index.html

if theirs any mistake or something you dont understand please contact me.

contact form:

https://programingstuff.wordpress.com/%D7%A6%D7%95%D7%A8-%D7%A7%D7%A9%D7%A8/


