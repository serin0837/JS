Live Dom viewer:
https://software.hixie.ch/utilities/js/live-dom-viewer/

1. The document object model

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Simple DOM example</title>
  </head>
  <body>
    <section>
      <img
        src="dinosaur.png"
        alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth."
      />
      <p>
        Here we will add a link to the
        <a href="https://www.mozilla.org/">Mozilla homepage</a>
      </p>
    </section>
  </body>
</html>
```

- You can see here that each element and bit of text in the document has its own entry in the tree — each one is called a node.
  - Element node: An element, as it exists in the DOM.
  - Root node: The top node in the tree, which in the case of HTML is always the HTML node
  - Child node: A node directly inside another node. For example, IMG is a child of SECTION in the above example.(한 단계 밑)
  - Descendant node: A node anywhere inside another node. For example, IMG is a child of SECTION in the above example, and it is also a descendant. IMG is not a child of BODY, as it is two levels below it in the tree, but it is a descendant of BODY.(한단계가 아니라 안에만 속하면 됨)
  - Parent node: A node which has another node inside it. For example, BODY is the parent node of SECTION in the above example.
  - Sibling nodes: Nodes that sit on the same level in the DOM tree. For example, IMG and P are siblings in the above example.
  - Text node: A node containing a text string.

2. How to select node
   there are many ways to select an element and store a reference to it in a variable.

- `Document.querySelector()`: which is convenient because it allows you to select elements using CSS selectors.
- If you wanted to match and do things to multiple elements, you could use `Document.querySelectorAll()`,which matches every element in the document that matches the selector, and stores references to them in an array-like object called a NodeList.
- There are older methods available for grabbing element references, such as:
- Document.getElementById(), which selects an element with a given id attribute value, e.g. <p id="myId">My paragraph</p>. The ID is passed to the function as a parameter, i.e. const elementRef = document.getElementById('myId').
- Document.getElementsByTagName(), which returns an array-like object containing all the elements on the page of a given type, for example <p>s, <a>s, etc. The element type is passed to the function as a parameter, i.e. const elementRefArray = document.getElementsByTagName('p').
  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents 이거랑 쿼리 셀렉터도 다시 한번더 볼것
