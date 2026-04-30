# What is react router dom?

1. react router dom is an external package of react js.
2. react js router dom is used to connect one page to another page.
3. react router dom is a package that is used to redirect one page to another page.

**How to install react router dom**
```

npm create vite@latest
cd appname
npm install react-router-dom

```

**Module of react router dom**

**BrowserRouter :**
```
it is a parent of routing will be load your Router in your wwbpage

import {BrowserRouter as Router} from 'react-dom'
```

**Router :**
```
it is a parent of routing will be load your Router in your wwbpage

import {BrowserRouter as Router} from 'react-dom'
```

**Routers :**
```
Routes is a module come from react router dom that can be hold as parent of multiple Route

import {BrowserRouter as Router, Routes} from 'react-dom'
```


**Router :**
```
Route is hold multiple components bia path
Route is multiple that can be hold multiple page Route

import {BrowserRouter as Router, Routes, Route} from 'react-dom'

```

**Link :**
```
Link is an module of react reouter dom and it is used to redirect one page to another page or Link multiple pages

import {Link} from 'react-router-dom'

<a herf="about.html">About</a>
or
<Link to='/about'>About</Link>
```

*** :**
```
* is search all page routing if page routing not found load 404 or page not found
```

**path :**
```
path is load your routing from react-router-dom

<Route path='/'></Route>
```


**Element :**
```
Element is a attribute of Route that can be explain your page route are loaded from which components in react js 

<Route path='/' element={Layout /}></Route>
```