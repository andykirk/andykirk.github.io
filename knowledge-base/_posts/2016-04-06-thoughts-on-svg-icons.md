---
title: Thoughts on SVG icons
tags: [Thoughts, SVG, Icons]
---
Feb 22
=====

Sara Soueidan's [Accessible Icon Buttons
](https://www.sarasoueidan.com/blog/accessible-icon-buttons/), along with a lot of work on building Elementary and NPEU6.1 has prompted me to a different approach for SVG icons.

We need to consider:

* Icons that are added for emphasis (non-essential) - if there's accompanying text so if they don't show up there's no problem. [1]
* Icons as above, but where they should be invisible in a NoCSS scenario. E.g. links with icons (which is probably the most common use-case) icons can look worse in a NoCSS scenario than not having them at all, so hide them if CSS not available. [2]
* Solo icons on actionable elements (links, buttons) need an accessible label for screen readers, but also displays as plain text where SVG is not supported.[3]


**1:** Non-essential icon.

```
<a href="#" class="c-cta">
    Call to Action<svg focusable="false" aria-hidden="true" width="1.25em" height="1.25em"><use xlink:href="#icon-chevron-right"></use></svg>
</a>
```

**2:** Add `display="none"` to the SVG and override this the stylesheet:

```
<a href="#" class="c-cta">
    Call to Action<svg focusable="false" aria-hidden="true" width="1.25em" height="1.25em" display="none"><use xlink:href="#icon-chevron-right"></use></svg>
</a>
```

**3:** Solo icon on an actionable element. Note the `aria-labelled-by` value corresponds to the `<text>` element's id so it's read aloud as an accessible label, but if SVG is not supported the `<text>` element shows instead.

```
<button aria-labelledby="search-button-label">
    <svg focusable="false" aria-hidden="true" width="1.25em" height="1.25em"><use xlink:href="#icon-search"></use><text visibility="hidden" id="search-button-label">Search</text></svg>
</button>
```


---

---

---

[Kitty Giraudel's recent post](http://www.sitepoint.com/a-working-svg-workflow-for-accessible-icons/) on [SitePoint](http://www.sitepoint.com) got me thinking about SVG icons again.
On the whole I like to approach he lay's out, especially considering how well it's supported in the context of using the [M3 Mustard Cut](https://github.com/Fall-Back/CSS-Mustard-Cut).
I particularly like how we leaves any fallback text up to the context in which it's used - the only difference is that I'd probably do the fallback text like this:

~~~
<p><svg class="icon icon-fire"><use xlink:href="#icon-fire"></use></svg> Text alongside icon</p>
<p><svg class="icon icon-fire"><use xlink:href="#icon-fire"></use></svg><span hidden aria-hidden="false">Fallback text</span></p>
~~~
(Note I've omitted the `viewBox` attribute present in the original post - it's not needed since the `<symbol>` tag is used in the main SVG. Note the `icon-fire` class isn't likely to be needed either )

In the second example the fallback text is visible to Assitive Technologies (AT) and in cases with old browsers where (due to the M3 Cut) the CSS won't load, but if the SVG fails as well. Using `aria-hidden` in both cases hides the icon from AT since the icons are for decoration only, and the fallback text is already taken care of.

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
(Originally taken from [SantizeCss](https://10up.github.io/sanitize.css/))

**NOTE TO SELF:** I see that the Sanitze SR-only CSS has been greatly reduced - I need to investage what impact this has on the browsers supported by the M3 Cut.

**UPDATE** It may be necessary to add `aria-hidden` to the `svg` tag as per http://www.456bereastreet.com/archive/201609/hiding_inline_svg_icons_from_screen_readers/
However, I'd rather avoid that so the markup is a lean as possible. It's probably safe just to ensure the main `svg` doesn't include any `title` attributes?

