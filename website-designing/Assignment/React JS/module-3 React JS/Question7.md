# How to install React Js on Windows, linux Operating System?

To install **Rreact JS**, you first need to install **Node.js** because React uses **Node Package Manager (npm)** to manage pacakges.

---

# 1. Install React JS on Windows

## Step 1: Install Node.js
1. Go to the offical Node.js website https://nodejs.org
2. Download the **LTS (Long Term Support)** version.
3. Run the installer an follow the setup instructions.
4. After installation, open **Command Prompt** and check the version.

```bash
node -v
npm -v
```
If both versions appear, Node.js is installed sucessfully.

---

## Step 2: Create a React Application
Open **Command Prompt** and run:
```bash
npx create-react-app my-app
```
- `npx` runs the package without installing globally.
- `create-react-app` creates a new React project.
- `my-app` is the project name.

---

## Step 3: Go to the project Folder
```bash
cd my-app
```

---

## Step 4: Start the React Application
```bash
npm start
```
The React app will open in the browser at:
```
http://localhost:3000
```

---

# 2. Install React JS on Linux

## Step 1: Install Node.js and npm
For **Ubuntu/Dabian** system run:
```bash
sudo apt update     
sudo apt install nodejs npm 
```

Check the installation:
```bash
node -v
npm -v
```

## Step 2: Create a React Application
```bash
npx create-react-app my-app
```

---

## Step 3: Move to the Project Folder
```bash
cd my-app
```

## Step 4: Run the React Application
```bash
npm start
```
open the browser and go to:
```
http://localhost:3000
```