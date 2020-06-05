import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap'; 
import bootstrap from 'bootstrap';
const API_URL = 'https://api.covid19india.org/raw_data3.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
  state = {
    users: []
  }
  componentDidMount() {
    const url = `${API_URL}`;
    axios.get(url).then(response => response.data.raw_data)
    .then((data) => {
      console.log(data)
      this.setState({ users: data })
 
     })
  }
  idkey = (id, p) => id+p;
  render(){
    return (
      <div className="container">
      <input ref={this.textInput}/>
     
       <h1>React Axios Example</h1>
       <Table>
            <thead className="btn-primary">
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
            
       {this.state.users.map((user) => (
         user.detectedstate == "Punjab" && 
         <tr key={user.entryid+user.detectedstate+user.patientnumber+user.detecteddistrict+user.numcases} >
         {console.log(user.entryid+user.detectedstate+user.patientnumber+user.detecteddistrict+user.numcases)}
         {console.log(user)}
         <td>{user.currentstatus}</td>
            <td>
             {user.detectedstate}             
            </td>
         </tr>
         ))}
        
        
            </tbody>
          </Table>         
     
       </div>
    
   );
  }

  }
 
export default App;
