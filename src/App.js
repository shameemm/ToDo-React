
import './App.css';
import {useState} from 'react'
function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  // const [del, setDele] = useState([])
  
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  const d = new Date();
  let day = weekday[d.getDay()];
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className='card'>
        <div className="subHeading">
          <br />
          <h2>Whoop, it's {day} 🌝 ☕ </h2>
        </div>
        <div className="input">
          <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
          <i onClick={()=>setToDos([...toDos,{id:Date.now(), text:toDo, status:'false'}])} className="fas fa-plus"></i>
        </div>
      </div>
      <br />
      <div className='card'>
        <div className="todos">
          {toDos.map((todo)=>{
            if(todo.status==='deleted'){
              <h2>Nothing to do! 🎉</h2>
              return null
            }
            
            return(
            <div className="todo"> 
            <div className="left">
              <input onChange={(e)=>{
                console.log(e.target.checked);
                console.log(todo);
                setToDos(toDos.filter(todo2=>{
                  if(todo2.id===todo.id){
                    todo2.status=e.target.checked
                  }
                  return todo2
                }))
              }} value={todo.status} type="checkbox" name="" id="" />
              <p>{todo.text}</p>
            </div>
            <div className="right">
              <i onClick={(e)=>{
                setToDos(toDos.filter(todo2=>{
                  if(todo2.id===todo.id){
                    todo2.status = 'deleted'
                    console.log(todo2.status);

                  }
                  return todo2
                }))
              }} className="fas fa-times"></i>
            </div>
          </div>)
          })}
          {
            toDos.length===0 && <h2>Nothing to do! 🎉</h2>}
        </div>
        
      </div>
      <br />
      <h4><u>Active Tasks</u></h4>
      {
        
          toDos.map((obj)=>{
            if(obj.status==='false'){
              return(
                <div className='card'>
                  
                  <p>{obj.text}</p>
                </div>
              )
            }
            return null
          })
        }
    </div>
  );
}

export default App;
