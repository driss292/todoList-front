import React from "react";
import Todo from "./Todo";

export default function TodosList({ data }) {
  // console.log(...data);
  return (
    <div>
      {data.map((todo) => {
        // console.log(todo.completed);
        return (
          <Todo
            key={todo._id}
            todo={todo}
            todoId={todo._id}
            complete={todo.completed}
          />
        );
      })}
    </div>
  );
}
