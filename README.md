1 no
difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

getElementById() → Selects only one element using the id.

getElementsByClassName() → Selects multiple elements using the class name (returns an HTMLCollection).

querySelector() → Uses a CSS selector to select the first matching element.

querySelectorAll() → Uses a CSS selector to select all matching elements (returns a NodeList).
 

 2 no 
 How to create and insert a new element into the DOM?
Steps:

1️⃣ Create a new element using createElement()
2️⃣ Add content using innerText or innerHTML
3️⃣ Insert it into the DOM using appendChild() or append()

3 no
What is Event Bubbling?

Event Bubbling is a process where an event starts from the target element and then moves upward to its parent, grandparent, and up to the document.


How does it work?

When you click (or trigger an event) on a child element:

1️⃣ The event runs on the child element first
2️⃣ Then it moves to the parent element
3️⃣ Then to the grandparent
4️⃣ And continues up to the document

This upward movement is called Event Bubbling.

4 no
What is Event Delegation in JavaScript?

Event Delegation is a technique where we add an event listener to a parent element instead of adding separate listeners to multiple child elements.

It works because of event bubbling — the event bubbles up from the child to the parent.

Why is it useful?

✅ Less code – No need to add many event listeners
✅ Better performance – Fewer listeners in memory
✅ Works for dynamic elements – Newly added child elements also work automatically
✅ Cleaner and easier to manage

5 no
Difference between preventDefault() and stopPropagation()
🔹 preventDefault()

Stops the default browser action

Example: Stops form submission or prevents a link from navigating

 It does NOT stop event bubbling.

🔹 stopPropagation()

Stops the event from bubbling up to parent elements

Prevents parent event listeners from running

 It does NOT stop the browser’s default action.

✅ Short Difference

preventDefault() → Stops default browser behavior

stopPropagation() → Stops event from moving to parent elements (bubbling)
