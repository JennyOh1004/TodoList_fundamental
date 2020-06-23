import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { id, text, checked, onRemove } = this.props;
    return (
      <div>
        <div
          onClick={e => {
            onRemove(id);
          }}
        >
          &times;
        </div>
        <div>{text}</div>
      </div>
    );
  }
}

export default TodoItem;
