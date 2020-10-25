import React, { Component } from 'react';
import Stateless from './Stateless';

class App extends Component{

 state = {userInput:[ 
   { name: 'Zed', 
     age: '123' ,
     id: '111'
   },
   { name: 'Fred', 
     age: '231',
     id: '222' 
   },
   { name: 'Shoun', 
   age: '369',
   id: '333' 
 }],
 status: false
 }

 stateFul = (event,key) =>{
 const forIndex = this.state.userInput.findIndex(p=>{return p.key === key});  
 const newData ={...this.state.userInput[forIndex]};
 newData.name =  event.target.value;
 const oldData = [...this.state.userInput];
 oldData[forIndex] = newData;
 this.setState({userInput:oldData});
 }

 toggle = () => {
   const show = this.state.status;
   this.setState({status:!show})
 }

 forDelete = (personIndex) =>{
   const collection = [...this.state.userInput];
   collection.splice(personIndex,1);
   this.setState({userInput:collection});
 }

  render(){
    let person = null;
  if(this.state.status){
    person = (this.state.userInput.map((userInput,index) =>{
      return <Stateless names ={userInput.name} ages={userInput.age} key={userInput.id} 
      delete ={()=>{this.forDelete(index)}}
      stateFul={(event)=>{this.stateFul(event,userInput.key)}} 
      />
    }))
  }
  return (
    <div>
      <button onClick={this.toggle}>toggle</button>
     {person}
    </div>
  );
}
}
export default App;
