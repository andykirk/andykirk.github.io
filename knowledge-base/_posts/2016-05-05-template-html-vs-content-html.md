---
title: Template HTML vs Content HTML
tags: [thoughts, markup]
---
As I was reading throught [this post on CSS Tricks](https://css-tricks.com/class-up-templates-not-content/) it struck me that I've had lots of thoughts on this topic for a while now, but never consolidated them.

I've long been fan of [Harry Roberts](http://csswizardry.com/) and CSS naming methodologies liek [BEM](http://getbem.com/introduction/) so when I read [Semantic CSS With Intelligent Selectors](https://www.smashingmagazine.com/2013/08/semantic-css-with-intelligent-selectors) I was annoyed.
It annoyed me with it's blanket approach, but if it's restricted to the context of CONTENT HTML, then it makes much more sense.
Avoiding classes in CONTENT is definitely a good thing.


Some things can't be distinguished:
-----------------------------------

* Inserts (Figures, Images, Tables etc) - their position, appearance and behaviour.
* Text variations (Lead paragraph, smallprint (`small`?), pull-quotes(?), large text(?))
* Boxed content (themed box, notice box, expanding box(`details`?))


So maybe use custom elements?
-----------------------------

[The Battle for the Body Field](http://alistapart.com/article/battle-for-the-body-field)

But, storing content's meaning with custom tags etc. is all well and good, but art direction and intended display does need to be considered too.
So whilst a the appearance of a 'notification' may change due to the CSS, the intention of a user-insert to be floated left/right or centred, plain or decorated, full-width or a third-width etc. does also need to be recorded. And these only very basic art-direction properties.
This also ties into the 'inline-styles' debate too; these sorts of styles - assuming they're actually important and not frivolous - should be able to be translated across any syndication that takes place, and there's only 2 way's of doing that:
Have globally recognised stylesheet that honours these properties as classes (or anything else), OR
Have the styles inlined.

Maybe also think about how these things could be represented if using Markdown?
I guess, maybe you shouldn't be using Markdown if you need such complex content?
Maybe use Markdown Extra (etc.) to add 'classes' (could be considered more like attributes - the final HTML doesn't necessarily have to add them as classes).

Related:
--------

[User Generated Content in a Classy World](http://snook.ca/archives/html_and_css/ugc-in-a-classy-world)