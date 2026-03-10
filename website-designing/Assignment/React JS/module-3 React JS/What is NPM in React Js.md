# What is NPM in React Js?

**NPM (Node Package Manager)** is the **default package manager for Node.js**. It is used to **install, manage, and share JavaScript packages (libraries or dependencies)** required for a project.

In **React JS**, NPM helps developers install React itself and other libraries needed to build a React application.

---

## why NPM is used in React
NPM is used in React projects to:
- Install React and releated libraries
- Manage project dependencies 
- Run development scripts
- Update or remove packages 
- Share reusable code

--- 

## Imprtant Concepts in NPM 

### 1. Package
A **Package** is a reusable peice of a code published in the NPM registry.

Example:
- `react`
- `react-dom`
- `axios`
- `redux`

---

### 2. package.json

`package.json` is a **configuration file** that stores information about the project and its dependencies.

Example:
```json
{
     "name": "my-react-app",
     "version":"1.0.0",
     "dependenices": {
          "react": "^18.2.0",
          "react-dom": "^18.2.0",
     }
}
```

---

### 3. node_module
`node_module` is a folder where **all installed pacakages are stored**.

Strucutre Example:

my-react-app
│
├── node_modules
├── package.json
├── package-lock.json
└── src

---

### 4. NPM Script
NPM allows running scripts defined in `package.json`.

Example:
```json
"scripts": {
     "start": "react-script start",
     "build": "react-script build",
     "test": "react-script test"
}
```
Run using:
```
npm start
npm run build
npm test
```

---

Common NPM Commands in React

**Install a package**
```
npm 
```