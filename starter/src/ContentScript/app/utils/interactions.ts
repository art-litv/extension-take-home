import { ElementMethod } from '../../types';
import { getElementByXPath } from './actions';

export const elementInteractions: Record<ElementMethod, (element: HTMLElement, ...args: unknown[]) => void> = {
  click: (element: HTMLElement) => {
    element.click();
  },
  addTodo: (element: HTMLInputElement, todos: string[]) => {
    todos.forEach((todo) => {
      element.value = todo;
      element.dispatchEvent(new Event('input', { bubbles: true }));
      element.dispatchEvent(new Event('change', { bubbles: true }));

      const todoElement = getElementByXPath("//div[@class='todo-list-item']");
      if (!todoElement) {
        return;
      }
    });
  },
};
