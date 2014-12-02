#jt-directives

A collection of directives, for personal and public use.


##jt-scroll-directive

This directive uses jQuery for easy, smooth scrolling with the use of classes.

Include the directive as a dependency in your app

```
var app = angular.module('myApp', ['jt-directive'])
```

Include the directive as an attribute on the parent element of whatever elements you want to invoke the scroll on.

```
<div class='nav-buttons' jt-scroll-directive>
    <a ng-click='go("/blog")' class='nav' href=''>Blog</a>
    <a ng-click='go("/portfolio")'class='nav' href=''>Portfolio</a>
    <a ng-click='go("/jacob")' class='nav' href=''>About Me</a>
</div>
```

Select which elements you want to invoke the scroll by adding the `'jt-scroll-from'` class.

```
<div class='nav-buttons' jt-scroll-directive>
    <a ng-click='go("/blog")' class='nav jt-scroll-from' href=''>Blog</a>
    <a ng-click='go("/portfolio")'class='nav jt-scroll-from' href=''>Portfolio</a>
    <a ng-click='go("/jacob")' class='nav jt-scroll-from' href=''>About Me</a>
</div>
```

Lastly, select a target to scroll to by setting a `'jt-scroll-target'` attribute to the parent element.

```
<div class='nav-buttons' jt-scroll-directive jt-scroll-target='content'>
    <a ng-click='go("/blog")' class='nav jt-scroll-from' href=''>Blog</a>
    <a ng-click='go("/portfolio")'class='nav jt-scroll-from' href=''>Portfolio</a>
    <a ng-click='go("/jacob")' class='nav jt-scroll-from' href=''>About Me</a>
</div>
```

This will result in a click event being fired each time one of the `<a>` elements is clicked, sending them (quite smoothly) to the element with the `'content'` class.

*Future changes:*  I built this directive for a very specific use-case. I will be changing how the parent interacts with the children.  In fact, I'll likely be getting rid of the parent element altogether. 
