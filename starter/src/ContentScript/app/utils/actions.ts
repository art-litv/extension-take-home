import actionsConfig from '../../shared/configs/actions';
import { FillStatus, QueuedElement } from '../../types';
import { elementInteractions } from './interactions';

export const getElementByXPath = (path: string, context: Document = document): HTMLElement | null => {
  const result = context.evaluate(path, context, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
  return result.singleNodeValue as HTMLElement | null;
};

export const getElementFromIframe = (xpath: string): HTMLElement | null => {
  const iframe = document.querySelector('iframe');
  if (!iframe) return null;

  return getElementByXPath(xpath, iframe.contentWindow?.document!);
};

export const getElement = (xpath: string): HTMLElement | null => {
  return getElementByXPath(xpath) ?? getElementFromIframe(xpath);
};

export const getQueueStatus = (queue: QueuedElement[]) => {
  if (queue.some((item) => item.status === FillStatus.Filling)) {
    return FillStatus.Filling;
  }
  if (queue.every((item) => item.status === FillStatus.Filled)) {
    return FillStatus.Filled;
  }

  return FillStatus.Unfilled;
};

export const createQueue = () => {
  const queue = actionsConfig.reduce<QueuedElement[]>((queue, config) => {
    const isActionsAvailable = config.actions?.some((action) => getElement(action.path));
    console.log(isActionsAvailable);

    if (isActionsAvailable) {
      queue.push({
        name: config.name,
        fill: () => {
          config.actions?.forEach((action) => {
            const actionElement = getElement(action.path);
            if (!actionElement) {
              return;
            }
            elementInteractions[action.method](actionElement, action.value);
          });
        },
        status: FillStatus.Unfilled,
      });
    }

    return queue;
  }, []);

  return queue;
};
