---
title: CSS Hide-and-Seek
tag: [CSS,Accessibility,Visually Hidden]
---

A useful insight into visually hidden text by [Gaël Poupard](https://twitter.com/ffoodd_fr) (translated by [Hugo Giraudel](hugogiraudel.com))

[CSS Hide-and-Seek](http://hugogiraudel.com/2016/10/13/css-hide-and-seek)

Final snippet:

~~~
.sr-only {
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  -webkit-clip-path: inset(50%) !important;
          clip-path: inset(50%) !important;
  height: 1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
}

.sr-only-focusable:focus,
.sr-only-focusable:active {
  clip: auto !important;
  -webkit-clip-path: none !important;
          clip-path: none !important;
  height: auto !important;
  overflow: visible !important;
  width: auto !important;
  white-space: normal !important;
}
~~~

I think I'd use HTML attributes rather than a class, though, so it would look like this:

~~~
[hidden][aria-hidden="false"] {
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  -webkit-clip-path: inset(50%) !important;
          clip-path: inset(50%) !important;
  height: 1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
}

[hidden][aria-hidden="false"]:focus,
[hidden][aria-hidden="false"]:active {
  clip: auto !important;
  -webkit-clip-path: none !important;
          clip-path: none !important;
  height: auto !important;
  overflow: visible !important;
  width: auto !important;
  white-space: normal !important;
}
~~~
