import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import EmployeeApp from './EmployeeApp.jsx'
// import IconApp from './IconApp.jsx'
// import OfficeApp from './officeApp.jsx'
import Destructuring from './Desturcturing'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    {/* <App name="Rohan" age={19} course="frontend developement" /> */}

    {/* <EmployeeApp name="John" id={123} department="Engineering" salary={50000} /> */}

    {/* <IconApp name="John" id="111" department="Engineering" salary={50000} /> */}

    {/* <OfficeApp name="John" id="111" Address="150 feet ring road" salary={50000}  /> */}

    <Destructuring name="John doe" email="john@gmail.com" contact_no="1487529036" address="150 feet ring road" edu="Bachelor of Engineering" />

  </StrictMode>,
)
