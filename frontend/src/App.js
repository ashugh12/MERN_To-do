import { useState, useEffect } from "react";
import Todo from "./components/Todo";
import {getAllToDo} from "./utils/HandleAPI" 
function App() {
  const [toDo, setToDo] = useState([])

  useEffect(()=>{
    getAllToDo(setToDo)
  }, [])
  return (
    <div className="App">
      <div className="container">
        <h1>ToDo app</h1>
        <div className="top">
          <input type="text" placeholder="Add Todos..." />
          <div className="add">Add</div>
        </div>
          <div className="list">
{toDo.map((item) => {return <Todo key={item._id} text={item.text} />})}
          </div>
      </div>
    </div> 
  );
}

export default App;
