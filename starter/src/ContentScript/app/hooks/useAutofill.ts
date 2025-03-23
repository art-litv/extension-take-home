import { useState, useEffect } from 'react';

import { createQueue, getQueueStatus } from 'ContentScript/app/utils/actions';
import { FillStatus, QueuedElement } from 'ContentScript/types';

const useAutofill = () => {
  const [elementsQueue, setElementsQueue] = useState<QueuedElement[]>([]);

  useEffect(() => {
    setElementsQueue(createQueue());
  }, []);

  const handleAutofill = () => {
    /*
        Not the best approach performance-wise since it rerenders the whole popup on each status change.
        Not critical in real situations (most forms have less than 10 elements),
        but can be optimized.

        For example, we can use Immer to mutate the state in a more clear and performant way,
        and use it over some state manager to track each element's status individually and rerender only the element, not the queue.

        Still, to remain simplicity I'll leave this solution, it's satisfactory for the task.
    */
    for (const item of elementsQueue) {
      item.status = FillStatus.Filling;
      setElementsQueue([...elementsQueue]);

      item.fill();

      item.status = FillStatus.Filled;
      setElementsQueue([...elementsQueue]);
    }
  };

  const status = getQueueStatus(elementsQueue);

  return { elementsQueue, status, handleAutofill };
};

export default useAutofill;
