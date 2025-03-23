import { ElementMethod } from '../../types';

type ElementAction = {
  method: ElementMethod;
  path: string;
  value?: string;
};

type ActionsConfig = {
  name: string;
  actions?: ElementAction[];
};

/*
  JSON could be used, by since we're using TypeScript, it's better to make it a configration object IMO.
*/
const actionsConfig: ActionsConfig[] = [
  {
    name: 'Start',
    actions: [
      {
        method: ElementMethod.Click,
        path: "//div[@id='startButton']",
      },
    ],
  },
  {
    name: 'Foo',
    actions: [
      {
        method: ElementMethod.AddTodo,
        value: 'foo',
        path: '//input[@id="new-todo"]',
      },
      {
        method: ElementMethod.Click,
        value: 'Add',
        path: './/fieldset[@id="foo"]//button',
      },
    ],
  },
];

export default actionsConfig;
