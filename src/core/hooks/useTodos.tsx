import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType, TodoActions, TodoSlice, TodoState } from 'src/core/store';

export type UseTodosType = [TodoState, TodoActions];

export function useTodos(): UseTodosType {
  const dispatch = useDispatch();
  const state = useSelector<StoreType, TodoState>((state) => state.Todos);
  const actions = bindActionCreators(TodoSlice.Actions, dispatch);

  return [state, actions];
}
