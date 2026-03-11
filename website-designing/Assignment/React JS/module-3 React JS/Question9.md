# How to check version of React Js? 

There are several ways to check the **React JS version** in a project.

---

# 1. Check React Version Using NPM
Open **Command Prompt** or **Terminal** inside your React Project folder and run:

```bash
npm list react
```

Example Output:
```
my-app@0.1.0
|_react@18.2.0
```
This shows that the installed React version is **18.2.0**

---

# 2. Check React Version in package.json
You can also check the React version in the **package.json** file.

## Step
1. Open your React project folder. 
2. Open the **package.json** file.
3. Look inside the **dependencies** section.

Example:
```json
"dependencies": {
  "react": "^18.2.0",
  "react-dom": "^18.2.0"
}
```
This means the project is using **React version 18.2.0**

---

# 3. Check React Version Using NPM Info
You can also check the latest React version available on NPM.
```bash
npm view react version
```

Example output:
```
18.2.0
```