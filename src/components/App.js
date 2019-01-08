import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const initTodos = new Array(500).fill(0).map((foo, index) => ({id: index, text: `일정${index}`, done: false}))
class App extends Component {
  state = {
    input: "",
    todos: initTodos
  };

  // 일정 데이터 안에 들어가는 id 값
  id = 1;
  getId = () => {
    return ++this.id; // 현재 값에서 1을 더한 값을 반환
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      input: value
    });
  };

  // 새 데이터 추가
  handleInsert = () => {
    const { todos, input } = this.state;

    // 새 데이터 객체
    const newTodo = {
      text: input,
      done: false,
      id: this.getId()
    };

    this.setState({
      todos: [...todos, newTodo],
      input: ""
    });
  };

  handleToggle = id => {
    // id로 배열의 인덱스 찾기
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    // 찾은 데이터의 done 값을 반전시킴
    const toggled = {
      ...todos[index],
      done: !todos[index].done
    };

    // slice를 사용하여 찾은 index 전 후의 데이터들을 복사하고,
    // 그 사이에 변경된 todo 객체를 넣어준다
    this.setState({
      todos: [
        ...todos.slice(0, index),
        toggled,
        ...todos.slice(index + 1, todos.length)
      ]
    });
  };

  // 선택한 id를 배열에서 제거
  handleRemove = id => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    // slice로 전 후 데이터들을 복사하고 우리가 찾은 index는 제외시킴
    this.setState({
      todos: [...todos.slice(0, index), ...todos.slice(index + 1, todos.length)]
    });
  };

  render() {
    const { input, todos } = this.state;
    const { handleChange, handleInsert, handleToggle, handleRemove } = this;

    return (
      <PageTemplate>
        <TodoInput
          onChange={handleChange}
          onInsert={handleInsert}
          value={input}
        />
        <TodoList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </PageTemplate>
    );
  }
}

export default App;