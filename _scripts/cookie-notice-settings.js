/*------------------------------------------------------------------------------------------------*\
    Fall-Back Cookie Notice Pattern v1.0
    ------------------------------------

    To avoid any confusion, it's probably best to copy these settings to another file that you're
    concatenating and then make any changes to the defaults.
\*------------------------------------------------------------------------------------------------*/

// Settings used in HTML.
// MAY BE Removed: I'm considering moving the HTML into the main template markup via a
// `<script type="template">` tag. If I do, these won't be necessary.
var cookie_notice_id              = 'cookie_notice';
var cookie_button_id              = 'accept_cookies';
var cookie_name                   = 'andykirk_cookie_notice';
var cookie_expire_days            = 60;
var cookie_notice_effect_duration = 1000;

var cookie_html                   =
'<fieldset role="presentation" id="' + cookie_notice_id + '">' + "\n" +
'<p>This site uses <a href="http://www.allaboutcookies.org/" rel="external noopener noreferrer" target="_blank">cookies</a> to improve user experience. By using this site you agree to our use of cookies.</p>' + "\n" +
'<button id="' + cookie_button_id + '">Dismiss</button>' + "\n" +
'</fieldset>';
