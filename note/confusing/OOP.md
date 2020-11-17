1. Programming Paradigms
   - Functional Programming - pure function
   - Object-Oriented Programming- Objects can hold data in properties and hold behaviours(functions) as methods.
     - factory functions: This function can return a new object every time its called. but every time it create new function with a different reference in memory. The solution is to bring this method outside the scope of the factory function itself. but then no reference available outside of scope and we can use this.
     - We can replace newUser with this, which represents the context of the function. Whenever a function is called as a method of an object, the this inside of it gets implicitly bound to whatever object is calling the function (implicit binding)
     - (explicit binding) call, apply, bind
     - arrow functions: The this value in an arrow function is automatically bound to the this value of the enclosing context of the function at the point of creation - not invocation (i.e. lexically). Attempting to actively set the this value (via implicit or explicit binding) will not work. 에러우 펑션을 사용하는 경우 this가 함수가 만들어졌을때 이미 정의 된다, 함수가 불러졌을 때가 아니라 그리고 binding을 할 수가 없음. 에로우 펀션이 이미 우리를 위해 해두었다

Ninja OOP

1. window object methods
