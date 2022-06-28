import React, { createRef, FunctionComponent } from 'react';
import { useTodos } from 'src/core/hooks';

export interface TodosPageProps { }

export const TodosPage: FunctionComponent<TodosPageProps> = () => {
  const inputRef = createRef<HTMLInputElement>();
  const [todos, action] = useTodos();

  function handleSubmit(e: any) {
    e.preventDefault();
    if (inputRef.current){
      action.create(inputRef.current.value);
      inputRef.current.value = '';
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
        <button type="submit">Novo</button>
      </form>
      
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.complete ? <s>{todo.text}</s> : todo.text}
            <div>
              <button onClick={() => action.toggle(todo.id)}>Toggle</button>
              <button onClick={() => action.remove(todo.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
