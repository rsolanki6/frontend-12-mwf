#  What is Components in React Js?

In **React JS**, a **Components** is a **small, reusable peice of code** that represents a part of the user interface (UI).

Components allow developers to **split the UI into independent and reusable parts**, making the application easier to develop, maintain, and manage.

For example, a website page can be divide into components like:
- Header
- Navbar
- Sidebar
- Content
- Footer

Each part can be created as a seperate **React components**.

## Type of Components in React

### 1. Functional Components
Functional components are **Javascript functions** that return JSX (HTMl - like code).

Example:
```javascript
function Welcome() {
     return <h1> Hello World! </h1>;
}
```
These are the **most commonly used components** in modern React.

### 2. Class Components
Class components are created using **Javascript classes** and extend `React.Component`.

Example:
```javascript
import React, {component} from "react";

class Welcome extends Component {
     render() {
          return <h1> Hello, World! </h1>;
     }
}
```
Class components were used earlier, but now **functional components with hooks** are preferred.

## Advantages of Components
- Reusable - can be used multiple times in an application.
- Easy to maintain - Code is divide into small parts.
- Better organization - Makes large applications easier to manage.
- Independent - Each component can work separately.

## Example of Using a Component
```javascript
function Header() {
     return <h1> My Website </h1>
}

function App() {
     return (
          <div>
          <Header />
          </div>
     );
}
```
Here, `Header` is a components used inside the `App` componens.
