<!-- How do you fetch data from a Json-server API in React? Explain the role of fetch() or axios() in making API requests. -->

Fetching data from an API is a common task in React applications. You can use either the **fetch() API** or **Axios** to make HTTP requests.

---

# 1. Using `fetch()` in React
`fetch()` is a built-in Javascript method used to make API calls.

## Example:

``` javascript
import React, { useEffect, useState } from "react";

function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Users;
```

---

## How it works

1. `useEffect()` runs when component loads
2. `fetch()` sends a GET request to API
3. Response is converted to JSON
4. Data is stored using `useState()`
5. UI uodates automatically

---

# 2. Using Axios in React
Axios is a popular third-party library for making HTTP requests.

## Install Axios

```
npm install axios
```

---

## Example:

```javascript
import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>User List</h2>
      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Users;
```

---

# Role of `fetch()` and Axios

## `fetch()`:
- Built into Javascript (no installation needed)
- Returns a Promise
- Requires manual conversion (`response.json()`)
- Less features compared to Axios

## Axios:
- External library (neeeeeds installation)
- Automatically parses JSON
- Better error handling
- Support request/response interceptors
- Cleaner and shorter syntax

---

# Key DIfferences

| Features | fetch() | axios |
|----------|---------|-------|
| Built-in | Yes | No |
| JSON parsing | Manual | Automatic |
| Error handling | Basic | Advanced |
| Interceptors | No | Yes |