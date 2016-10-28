---
title: CSS Tricks
tags: [CSS,Navigation,Current/Active Link]
---
I'm a big fan of [CSS Tricks](https://css-tricks.com) but that's not what this post is about.

I first started a real job as Web Developer in 2003. Back then the Web was very new, I was very new to Web Development.
Recently I had cause to recall one of the very first CSS techniques I ever encountered. For me, it was the very first 'CSS trick' and gave me that "Ah ha!" moment when much of how CSS works clicked into place.
Out of sheer nostalgia I went looking for it. I'm pretty sure this is the article I saw all those years ago:
[Highlighting current page with CSS](http://www.hicksdesign.co.uk/journal/highlighting-current-page-with-css)

It's not a technique I'd employ or recommend any longer, but I'm happy it still exists!

Incidentally, what I would do is make sure the CMS output omitted the href for the current item.
This is perfectly valid, and would seem it's the correct way to do this.
[See the HTML `href` spec](https://www.w3.org/TR/html5/links.html#attr-hyperlink-href):

> The href attribute on a and area elements is not required; when those elements do not have href attributes they do not create hyperlinks.

And the [spec for the `a` element](https://www.w3.org/TR/html5/text-level-semantics.html#the-a-element):

> If the `a` element has no `href` attribute, then the element represents a placeholder for where a link might otherwise have been placed, if it had been relevant, consisting of just the element's contents.

And gives this example:

> ~~~
<nav>
 <ul>
  <li> <a href="/">Home</a> </li>
  <li> <a href="/news">News</a> </li>
  <li> <a>Examples</a> </li>
  <li> <a href="/legal">Legal</a> </li>
 </ul>
</nav>
~~~

These navigation links can then be targetted in CSS like this:

~~~
/* Current styles first: */
nav a {
  ...
}

/* The link styles: */
nav a[href] {
  ...
}

nav a[href]:hover,
nav a[href]:active,
nav a[href]:focus {
  ...
}
~~~

Note, I'm not sure if it's best to use `a[href]` or `a:link`. I need to investigate this and see if it matters.
