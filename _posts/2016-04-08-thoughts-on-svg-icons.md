---
layout: post
title: Thoughts on SVG icons
---
[Hugo Giraudel's recent post](http://www.sitepoint.com/a-working-svg-workflow-for-accessible-icons/) on [SitePoint](http://www.sitepoint.com) got me thinking about SVG icons again.
On the whole I like to approach he lay's out, especially considering how well it's supported in the context of using the [M3 Mustard Cut](https://github.com/Fall-Back/CSS-Mustard-Cut).
I particularly like how we leaves any fallback text up to the context in which it's used - the only difference is that I'd do the fallback text like this:

~~~
<p><svg viewBox="0 0 16 16" class="icon icon-fire"><use xlink:href="#icon-fire"></use></svg> Text alongside icon</p>
<p><svg viewBox="0 0 16 16" class="icon icon-fire"><use xlink:href="#icon-fire"></use></svg><span hidden aria-hidden="false">Fallback text</span></p>
~~~

In the second example the fallback text is visible to assitive technologies and in cases with old browsers where (due to the M3 Cut) the CSS won't load, but if the SVG fails as well.

Since I use my [Start CSS](https://github.com/Fall-Back/Start-CSS) all the time, I always get this "SR-only" CSS:

~~~
[hidden][aria-hidden="false"] {
    display: inline;
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;

[hidden][aria-hidden="false"]:focus,
[hidden][aria-hidden="false"]:active {
        clip: auto;
        height: auto;
        margin: 0;
        overflow: visible;
        position: static;
        width: auto;
	}
}
~~~
(Originally taken from [SantizeCss](https://10up.github.io/sanitize.css/)
