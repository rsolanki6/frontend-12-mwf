import React,{Component} from "react";
class App extends React.Component{
  render()
  {
    return(
      <>
      <div className="">
        <p>This is a class based components</p>
        <h3>My name is :{this.props.name}</h3>
      </div>
      </>
    )
  }
}

export default App;