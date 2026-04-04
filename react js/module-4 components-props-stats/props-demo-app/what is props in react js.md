# What is React JS

1. props stands for properties in react js
2. props are passed in function as argment or parameter and access in html or jsx as attribute
3. props is immutable can not be changed
4. props are used to read data
5. props are passed and used data one components to another components to parent to child
6. props access html or jsx data as attributes

```
function App(props)
{
     return(
          <>
               <h1> {props.name} </h1>
          </>
     )
}
export default App
```

# What is destructuring in process ?
1. destructuring is used to access multiple properties pass as an object inside of function
2. destructuring access all properties inside of object (name,age)

```
function App({name,age})
{
     return(
          <>
               <h1> {name} </h1>
               <h1> {age} </h1>
          </>
     )
}
export default App
```