
### Questions :

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

### Answer to the question no 1
i) getElementById--> Selects a single element based on its unique id attribute.
ii) getElementsByClassName-->Selects all elements that have a specific class name.
iii) querySelector --> Selects the first element that matches a specified CSS selector.
iv) QuerySelectorAll --> Selects all element that matches a specified CSS selector.

### Answer to the question no 2
i) create a new element into DOM: document.createElement();
ii) insert a new element into DOM: appendChild(); 

### Answer to the question no 3
Event Bubbling : In js event bubbling is a process where an event triggered on a child element and travels up the DOM tree from the target element to its parents element.
For example, if someone click on an inner part, the event first triggers handlers on that inner part, then on its parent part, and then its grandparent part and continue this .
Working process:
step - 1: Target Element: An event, like a click, occurs on a specific element within a nested structure of HTML elements. 
step - 2. Propagation: The event first triggers any event handlers attached directly to that target element. 
step - 3. Bubbling Up: The event then "bubbles up" the DOM tree, moving from the target element to its immediate parent. 
step - 4. Ancestors: This upward movement continues through the parent's parent . 
step - 5. Root Reached: The event continues to bubble up until it reaches the very top of the DOM tree.
step - 6. Event Delegation: Event bubbling is crucial for event delegation, a technique where a single event listener on a parent element can manage events for all its children by checking the event's target property. 

### Answer to the question no 4
Event delegation in JavaScript is a way that allow us to handle events for multiple child elements with a single event listener attached to their common parent.
Event delegation is usefull because it improve performance, handle dynamic elements and prevent memory leaks.

### Answer to the question no 5
i) preventDefault()--> In js preventDefault() is used for prevents the browser's default action.
ii) stopPropagation() --> In js stopPropagation() is used for stop the propagation of DOM hierarchy,
