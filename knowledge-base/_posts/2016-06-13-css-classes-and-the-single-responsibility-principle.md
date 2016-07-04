---
title: CSS Classes and the Single Responsibility Principle
tags: [Thoughts, CSS]
---
TL;DR
-----
Clearly define responsibility for _groups_ of classes, and only allow more than one class on an element when they're from different groups that will clearly never conflict.


In Full
-------

Harry Roberts has long advocated applying the single-responsibility principle (SRP) to CSS classes when used on HTML elements.
The basic idea is that if you create a re-usable class, you apply that to an element on it's own - you don't put any other classes on that element.
The justification for this that if you mix classes, you're trying to make the element to do too much - to be responsible for too many jobs.
On the whole I agree with this - there have been many times where I've fallen foul of this, and the application of one class can override some crucial property of another class, thus breaking the first class.

These breakages can often be difficult to debug as it's not always obvious where the clash has occurred, especially if breaks only occur in one browser. It's possible that these clashes can go undetected for long time because it's often not practical to test every combination of every class in every browser you're supporting.
Applying the SRP to your markup meas these clashes will never occur, and so only individual classes/patterns need to be tested across browsers.

However, like with any rule it's sometimes ok to break them, as long as you k now what the acceptable exceptions are.
It's my opinion that one exception to the SRP is when you need to apply decoration to a layout box. Often, layout classes are use on elements to provide structure, and content can sit inside that structure independently. But sometimes you may want to apply so decoration to the whole exact space provided by the layout box separately from any content blocks within. It's usually possible add an extra wrapper, but in cases where you want things to be 100% height of their container, the extra wrapper will be the height of the content instead and so any decoration will not appear correctly. Using flexbox does, admittedly solve many of these problems but sometimes that not an option, or it causes other problems:

E.g.:
(Note I need a better example here - I just know I've run afoul of this kind of situation)

~~~
<div class="3-up-boxes-equal-height">
    <div class-"3-up-box">
    <div class-"3-up-box">
    <div class-"3-up-box">
</div>
~~~

This pattern uses flexbox to create 3 boxes in a row that are all the same height, regardless of the content in them.
Now imagine you wanted the container div to have background colour and a shadow. Using the SRP you've to have another wrapper.
Lets say for the sake of argument you can't wrap the container itself, your only option would be to wrap the 3 child divs.

However, this would break the pattern, as the child divs are no longer flex-children of the container the equal-height rules would be lost. The only way to solve this would be to add flex and display:flex properties to the new wrapper, which effectively duplicates all the rules of the original container. This does not make for better CSS. In this case, I'd say it was perfectly acceptable for the decoration class to appear on the same div as the layout classes.
Perhaps the 'rule' of this could be something like "so long as the classes are from different, unrelated groups".
So if your decoration classes never declare any properties that conflict with your layout classes, it's ok to mix them.
...
