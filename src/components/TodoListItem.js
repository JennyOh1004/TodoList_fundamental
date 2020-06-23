import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoListItem extends Component {
  render() {
    const { todos, onRemove } = this.props;
    const todoList = todos.map(({ id, text, checked }) => (
      <TodoItem
        id={id}
        text={text}
        checked={checked}
        onRemove={onRemove}
        key={id}
      />
    ));
    return <div>{todoList}</div>;
  }
}

export default TodoListItem;
