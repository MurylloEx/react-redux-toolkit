import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { TodoActions } from 'src/core/store/ducks/todos';
import { TodoDuck, Todo, StoreType } from 'src/core/store';

export type UseTodosType = [Todo[], TodoActions];

export function useTodos(): UseTodosType {
  const dispatch = useDispatch();
  const state = useSelector<StoreType, Todo[]>((state) => state.Todos);
  const actions = bindActionCreators(TodoDuck.Actions, dispatch);

  return [state, actions];
}
