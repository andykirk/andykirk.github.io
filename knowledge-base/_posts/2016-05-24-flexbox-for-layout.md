---
title: Flexbox for layout
tags: [Thoughts, CSS, Flexbox]
---

Jake Archibold recommends [not to use Flexbox for layout](https://jakearchibald.com/2014/dont-use-flexbox-for-page-layout/).

His points make sense, but there _is_ a good reason _to_ use Flexbox for layout:

* If you're using floats for columns, [pixel rounding is an issue](https://www.sitepoint.com/a-tale-of-css-and-sass-precision). Using Flexbox (or even Table display) solves this problem.
* So, until we can use Grid everywhere (which will be ages because older browsers don't die overnight), I personally wouldn't rule out using Flexbox for layout.
