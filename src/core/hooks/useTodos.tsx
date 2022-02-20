import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { Todo } from 'src/core/store/interfaces';
import { TodoHandlers, StoreType, TodoActions } from 'src/core/store';

export type UseTodosType = [Todo[], TodoActions];

export function useTodos(): UseTodosType {
  const dispatch = useDispatch();
  const state = useSelector<StoreType, Todo[]>((state) => state.Todos);
  const actions = bindActionCreators(TodoHandlers.Actions, dispatch);

  return [state, actions];
}