export interface Todo {
  id: number;
  complete: boolean;
  text: string;
}

export interface ActionType<T = string, D = any> {
  type: T;
  payload: D;
}