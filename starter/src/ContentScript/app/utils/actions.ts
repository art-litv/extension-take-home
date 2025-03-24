import actionsConfig from '../../shared/configs/actions';
import { FillStatus, QueuedElement } from '../../types';
import { elementInteractions } from './interactions';

export const getElementByXPath = (path: string): HTMLElement | null => {
  const result = document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

  return result.singleNodeValue as HTMLElement | null;
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
  const filledQueue = actionsConfig.reduce<QueuedElement[]>((queue, config) => {
    const isActionsAvailable = config.actions?.some((action) => getElementByXPath(action.path));

    if (isActionsAvailable) {
      const fill = () => {
        config.actions?.forEach((action) => {
          const actionElement = getElementByXPath(action.path);

          if (!actionElement) {
            return;
          }
          elementInteractions[action.method](actionElement, action.value);
        });
      };

      queue.push({
        name: config.name,
        fill,
        status: FillStatus.Unfilled,
      });
    }

    return queue;
  }, []);

  return filledQueue;
};
