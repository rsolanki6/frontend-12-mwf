import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import EmployeeApp from './EmployeeApp.jsx'
// import IconApp from './IconApp.jsx'
import OfficeApp from './officeApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    {/* <App name="Rohan" age={19} course="frontend developement" /> */}

    {/* <EmployeeApp name="John" id={123} department="Engineering" salary={50000} /> */}

    {/* <IconApp name="John" id="111" department="Engineering" salary={50000} /> */}

    <OfficeApp name="John" id="111" Address="150 feet ring road" salary={50000}  />

  </StrictMode>,
)
