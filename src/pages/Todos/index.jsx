import React, { createRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators } from '../../core/store';

const TodosPage = ({ todos, toggleTodo, removeTodo, addTodo }) => {

  const inputRef = createRef();

  function handleSubmit(e) {
    e.preventDefault();
    addTodo(inputRef.current.value);
    inputRef.current.value = '';
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input ref={el => (inputRef.current = el)} />
        <button type="submit">Novo</button>
      </form>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.complete ? <s>{todo.text}</s> : todo.text}
            <div>
              <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
              <button onClick={() => removeTodo(todo.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function mapStateToProps(state) {
  return { todos: state.TodoReducer };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Creators, dispatch);
}

export const Todos = connect(mapStateToProps, mapDispatchToProps)(TodosPage);
