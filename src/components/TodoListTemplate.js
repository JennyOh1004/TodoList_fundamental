import React from "react";
import "./TodoListTemplate";

const TodoListTemplate = ({ form, children }) => {
  return (
    <div>
      <main>
        <div className="title">Today's todolist</div>
        <section>{form}</section>
        <section>{children}</section>
      </main>
    </div>
  );
};

export default TodoListTemplate;
