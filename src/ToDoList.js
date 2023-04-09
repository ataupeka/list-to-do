import { Component } from 'react';
export class ToDoList extends Component{

state ={
    userInput:"",
    toDoList:[]
}

onChangeEvent(e){
   this.setState({userInput:e});
}

addItem(input){
    if(input === ''){
        alert("Please enter an item")
    }
else{
    let listArray= this.state.toDoList;
    listArray.push(input);
    this.setState({toDoList:listArray,
        userInput:''
    })
}
}


deleteItem(){
    let listArray =this.state.toDoList;
    listArray=[];
    this.setState({toDoList:listArray})
}


crosseWord(event) {
    const li=event.target;
    li.classList.toggle('crossed');
}

onFormSubmit(e){
    e.preventDefault();
}

render(){
    return( 
    <div>
        <form onSubmit={this.onFormSubmit}>
<div className="center"> 
 <input type ="text" 
 placeholder="What do you want to do today?"
 onChange={(e) =>{this.onChangeEvent(e.target.value)}}
 value={this.state.userInput}/> 
 <button className='btnAdd' onClick={() =>this.addItem(this.state.userInput)} >Add</button> 

</div>
<div className='center'>  
    <ul>  
  {this.state.toDoList.map((item,index) => (
<li onClick={this.crosseWord} key={index}>  {item} </li>
    
  ))}
</ul>
</div>
<div className='center'> <button  className='btnDelete' onClick={() =>this.deleteItem()}> Delete    </button> </div>
</form>   
    </div>
    
);
}




}
export default ToDoList;