import { useState, useEffect } from "react";
import Todo from "./components/Todo";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/HandleAPI";
function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDOId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);
  const updatemode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDOId(_id);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>ToDo app</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add Todos..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add"
            onClick={
              !isUpdating ? () => addToDo(text, setText, setToDo):
                () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {toDo.map((item) => {
            return (
              <Todo
                key={item._id}
                text={item.text}
                updateMode={() => updatemode(item._id, item.text)}
                deleteToDo={()=> deleteToDo(item._id, setToDo)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
