import React,{Component} from "react";
class EmployeeApp extends React.Component{
     
     constructor(props)
     {
          super(props);
          this.state={
               id:1,
               name:"rohan",
               salary:50000,
               pin:360003,
               department:"IT",
          }
     }
     
     render()
     {
         return(
             <div>
                 <p>This is an employee component</p>
                 <p>ID: {this.state.id}</p>
                 <p>Name: {this.state.name}</p>
                 <p>Salary: {this.state.salary}</p>
                 <p>Pin: {this.state.pin}</p>
                 <p>Department: {this.state.department}</p>
             </div>
         )
     }

}

export default EmployeeApp;