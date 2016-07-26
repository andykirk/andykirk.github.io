---
title: Flex-basis tip
tags: [Flexbox, Flex-basis, Tips]
---
I always get confused about when you should use flex-basis. Hopefully this [flexbox tip from Zoe Gillenwater](http://www.creativebloq.com/advice/3-pro-tips-for-using-flexbox) should help straighten it out in my head:

> The value for your flex-basis property is your starter width or height. If you have flex-grow or flex-shrink set to a nonzero value, your boxes can get bigger or smaller than the flex-basis value in order to fit the space. If you have flex-wrap on, you can think of flex-basis like a minimum width (or height, if using column orientation), because as the items can wrap when they run out of space, they never have any reason to shrink smaller than the flex-basis value. If you have flex-grow off and flex-shrink on, flex-basis becomes more like a maximum width, because you're telling the browser items that aren't allowed to grow bigger than the flex-basis value.

Thanks [Zoe](http://zomigi.com/)!
