---
title: Is there really such a thing as a 'purely decorative' image?
tags: [Thoughts, Images, Markup]
---
Well, technically, yes. You can use an `<img>` tag to load any image, but when was the last time anyone used one as part of a decorative flourish on site's design? Or anywhere else for that matter?
That's all done with CSS these, right?

A 'purely decorative' image, as I understand it is one that if it were removed from the page would have no impact on the interpretation of any remaining text. You would set `alt=""` on the `<img>` tag so screen-readers ignore them. They're for visual effect only, right?

What I'm talking about are images in the context of a body of content, for example a news article, a blog post, or a page of information about a business. It's very common for news items and blog post to displayed with a headline image. Article about exam results? Show a picture of some students taking an exam. Article about space? Show a picture of some stars. We've all seen that kind of thing.

Are these images purely decorative? I always used to answer 'Yes'. After-all, they're not info-graphics or diagrams crucial to the understanding of the overall content. Most of the time they're not even depicting any specific that's mentioned in the text. But what we're talking about here is _relevance_. If an image is purely decorative, it's surely superfluous. It's superfluous then it doesn't matter what it looks like or if it's there or not. And yet, no one with an iota of sense would write an article and then pick a headline image _completely at random_. That would make no sense. A person would pick an image that was _relevant_ to the article. But what does that reverence actually convey? What do the images actually DO? Well, here's a list of what I think they do:
 
1. they help distinguish on article from the next in cases where a list of articles is being displayed.
2. they help provide a visual context for the text that follows it to help a user scan for stories that might be relevant to them and give an impression of what the article may be about.
3. they might actually show the subject of the article - perhaps an artefact in a museum.

So, they **DO** do _something_. Points 1-2 in the list above would probably have `alt=""` on the `<img>` tag so screen-readers ignore them, but if a user was completely unable to see the images, the _meaning_ of the image, no matter how tangential, would be lost. My thinking is now that even 'decorative' headline images do still have a purpose and it's that purpose that would need to be conveyed with the `alt` text. While it's not possible to provide a user using a screen-reader the same 'scannable' experience (points 1-2 above), it might be appropriate to the `alt` text to provide the user with a summary of the article, or a statement of context.

For example:
An article with the headline "Record Exam Results for Fourth Consecutive Year", strapline "Are Exams Getting Easier?" may show an image of students sitting an exam. Much of the subject of the article can be taken from the headline and strapline, but what extra detail does the image give? The image is likely to give the age of the students being talked about, the cultural diversity, that sort of thing. If that's no relevant to the article, why was it chosen? What else IS relevant?

Useful links
------------

* <http://webaim.org/techniques/alttext/>
* <https://css-tricks.com/accessible-svgs>
