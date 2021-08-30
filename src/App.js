import { Component } from 'react';
import {    Navbar } from 'reactstrap';


import Staffname from './Components/Staffname';
import { STAFFS } from './shared/staffs';



class App extends Component {
    constructor(props){
      super(props)
      this.state = {
        staffs: STAFFS
      };
    }
    
   
    render(){
  return (
    <div>
      <Navbar  color="primary">
        <h2  style={{textAlign:"center"}}>APP QUẢN LÝ NHÂN SỰ 1.0</h2>
      </Navbar>
        <Staffname  staffs ={this.state.staffs}/>
       
    </div>
  )
  };
  componentWillUnmount(){
    return true;
  }
}

export default App;
