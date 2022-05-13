import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import TodosList from "./components/TodosList";

import {
  // addTodo,
  getTodos,
  // updateTodo,
  // deleteTodo,
  // completeTodo,
} from "./services/todoServices";

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTodos();
        // console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [data]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form input={input} setInput={setInput} />
        </div>
        <div>
          <TodosList data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
