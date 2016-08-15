---
title: Template HTML vs Content HTML
tags: [Thoughts, Markup]
---
As I was reading through [Chris Coyer's post on CSS Tricks](https://css-tricks.com/class-up-templates-not-content/) it struck me that I've had lots of thoughts on this topic for a while now, but never consolidated them. Of particular note is is Chris's distinction between __template__ HTML and __content__ HTML, also referred to as User Generated Content (UGC).

I've long been fan of [Harry Roberts](http://csswizardry.com/) and CSS naming methodologies like [BEM](http://getbem.com/introduction/) so when I read [Semantic CSS With Intelligent Selectors](https://www.smashingmagazine.com/2013/08/semantic-css-with-intelligent-selectors) I was annoyed.
It annoyed me with it's blanket approach, but if it's thinking restricted to the context of __content__ HTML, then it makes much more sense.

Avoiding classes in __content__ is definitely a good thing. It's a good thing because, as Chris points out, classes can be frigile and if the CMS or theme of a site were to change, those classes may not necessarily be available, or worse - mean something else entirely. 

Another reason to avoid classes is that they won't translate across any syndication - if that content is consumed by a feed-reader, for example, then it'll be styled by __that__ applications stylesheets.

Yet another reason would be the integrity of that content without any styles at all. This touches on areas of Accessibility and my other project [FallBack](http://fall-back.github.io)


Some things can't be distinguished:
-----------------------------------

* Inserts (Figures, Images, Tables etc) - their position (floated? centred? full-width?), appearance (border decoration?) and behaviour (linked? part of a gallery?).
* Text variations (Lead paragraph, smallprint (`small`?), pull-quotes(?), large text(?))
* Boxed content (themed box, notice box, expanding box(`details`?))
* Other things may include displaying items as a tile-grid, or an accordions/tabs etc.


So maybe use custom elements?
-----------------------------

[The Battle for the Body Field](http://alistapart.com/article/battle-for-the-body-field)

But, storing content's meaning with custom tags etc. is all well and good, but art direction and intended display does need to be considered too.
So whilst a the appearance of a 'notification' may change due to the CSS, the intention of a user-insert to be floated left/right or centred, plain or decorated, full-width or a third-width etc. does also need to be recorded. And these only very basic art-direction properties.
This also ties into the 'inline-styles' debate too; these sorts of styles - assuming they're actually important and not frivolous - should be able to be translated across any syndication that takes place, and there's only 2 way's of doing that:

1. Have globally recognised stylesheet that honours these properties as classes (or anything else), OR
2. Have the styles inlined.

Maybe also think about how these things could be represented if using Markdown?
I guess, maybe you shouldn't be using Markdown if you need such complex content?
Maybe use Markdown Extra (etc.) to add 'classes' (could be considered more like attributes - the final HTML doesn't necessarily have to add them as classes).

One possible way of looking at this is that anything that requires a class should be abstracted into it's own component, that way classes can be applied as part of the template for that component.
A placeholder would be inserted instead. That's basically re-stating what I've said at the start of this section but I like clarify things for myself.

The downside with this approach is the UX of authoring - it could be a pain to add a 'component' just for some small text, for example.

Related:
--------

* [User Generated Content in a Classy World](http://snook.ca/archives/html_and_css/ugc-in-a-classy-world)
* [Leverage WordPress Functions to Reduce HTML in your Posts](https://css-tricks.com/leverage-wordpress-functions-reduce-html-posts/)
