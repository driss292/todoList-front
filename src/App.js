import { useState } from "react";

import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import TodosList from "./components/TodosList";

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

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
          <TodosList data={data} setData={setData} />
        </div>
      </div>
    </div>
  );
}

export default App;
