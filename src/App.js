import React, { Component } from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import TodoListItem from "./components/TodoListItem";
import Form from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      todos: [
        {
          id: 0,
          text: "react",
          checked: false
        },
        {
          id: 1,
          text: "react",
          checked: true
        },
        {
          id: 2,
          text: "react",
          checked: false
        }
      ]
    };
  }

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: "",
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleCreate();
    }
  };

  handleRemove = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    const { input, todos } = this.state;
    const { handleChange, handleCreate, handleKeyPress, handleRemove } = this;
    return (
      <div>
        <TodoListTemplate
          form={
            <Form
              value={input}
              onCreate={handleCreate}
              onKeyPress={handleKeyPress}
              onChange={handleChange}
            />
          }
        >
          <TodoListItem todos={todos} onRemove={handleRemove} />
        </TodoListTemplate>
      </div>
    );
  }
}

export default App;
