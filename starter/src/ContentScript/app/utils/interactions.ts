import { ElementMethod } from '../../types';

export const elementInteractions: Record<ElementMethod, (element: HTMLElement, ...args: unknown[]) => void> = {
  click: (element: HTMLElement) => {
    element.click();
  },
  addTodo: (element: HTMLInputElement, value: string) => {
    element.value = value;

    const keyEvent = new KeyboardEvent('keyup', {
      bubbles: true,
      cancelable: true,
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
      which: 13,
    });

    element.dispatchEvent(keyEvent);
  },
};
