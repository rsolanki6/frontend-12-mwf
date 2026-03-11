# What is Header and Content Components in React Js? 

In **React JS**, **Header** and **Content** components are parts of the **user interface (UI)** that helps organize a webpage into reusable sections.

They are created as **Separate components** to make the code more **structured and reusable**.

## 1. Header component

The **Header components** represents the **top section of a website or application**.

It usually contains elements such as:

- Website logo
- Navigation menu
- Title
- Search bar
- Login or profile button

### Example of Header components

```javascript
function Header() {
     return (
          <header>
               <h1> My website </h1>
               <nav>
                    <a herf="#">Home</a>
                    <a herf="#">About</a>
                    <a herf="#">Contact</a>
               </nav>
          </header>
     );
}
```

## 2. Content Component
The **Content component** represents the **main section of the webpage** where the primary information is displayed.

It can contain:
- Text
- Images
- Articles
- Products
- Blog posts

### Example of Content Component
```javascript
function content() {
     return (
          <main>
               <h2> Welcome to My Website </h2>
               <p> This is the main content area of the page. </p>
          </main>
     );
}
```

### Using Header and Content in App Component
Both components can be used inside the **main App componnt**.
```javascript
function App() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}
```

## Advantages
- Better code organization
- Resuable components
- Easy to maintain
- Improves readability