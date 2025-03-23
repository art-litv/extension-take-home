export enum FillStatus {
  Unfilled = 'unfilled',
  Filling = 'filling',
  Filled = 'filled',
}

export enum ElementMethod {
  Click = 'click',
  AddTodo = 'addTodo',
}

export type QueuedElement = {
  fill: () => void;
  status: FillStatus;
  name: string;
};
