import React from "react";
import Todo from "./Todo";

export default function TodosList({ data }) {
  return (
    <div>
      {data.length > 0 &&
        data.map((todo) => {
          return (
            <Todo
              key={todo._id}
              todo={todo}
              todoId={todo._id}
              // complete={todo.completed}
            />
          );
        })}
    </div>
  );
}
