---
title: Visually Hidden
tag: [CSS, Accessibility, Visually Hidden]
---
Update 21-17-02:

[Hiding Content Responsibly](https://kittygiraudel.com/2021/02/17/hiding-content-responsibly/)

---

Update 20-10-27 :

[Comparing Various Ways to Hide Things in CSS](https://css-tricks.com/comparing-various-ways-to-hide-things-in-css/)

---

A look at different techniques to hide something visually whilst keeping it accessible:

[https://zellwk.com/blog/hide-content-accessibly](https://zellwk.com/blog/hide-content-accessibly)


CSS Hide-and-Seek:
----------------------

A useful insight into visually hidden text by [Gaël Poupard](https://twitter.com/ffoodd_fr) (translated by [Kitty Giraudel](https://kittygiraudel.com/))

[CSS Hide-and-Seek](https://kittygiraudel.com/2016/10/13/css-hide-and-seek/)

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

I quite like using use HTML attributes rather than a class, though, especially for this sort of thing. Sanitizer CSS uses this:

```
[hidden][aria-hidden="false"]
```

However inside links, I noticed NVDA on Crome (at least) announces "link" at the start of each span. Some for example in a pagination link where "page" is visually-hidden and "1" is visible, NVDA announces "link page link 1". Annoying.

Plus, looking at MDN it seems pretty clear the Sanitizer approach is actually an abuse of those attributes.

More:

* [Inclusively Hidden](https://css-tricks.com/inclusively-hidden/)

```
.sr-only:not(:focus):not(:active) {
  clip: rect(0 0 0 0); 
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap; 
  width: 1px;
}
```

* [Revisting aria-label versus a visually hidden class](https://gomakethings.com/revisting-aria-label-versus-a-visually-hidden-class/)


