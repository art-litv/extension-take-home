import { useState, useEffect } from 'react';
import { createQueue, getQueueStatus } from '../utils/actions';
import { FillStatus, QueuedElement } from '../../types';

const useAutofill = () => {
  const [elementsQueue, setElementsQueue] = useState<QueuedElement[]>([]);

  const status = getQueueStatus(elementsQueue);

  const resetQueue = () => {
    setElementsQueue(createQueue());
  };

  useEffect(() => {
    // Initial queue creation
    resetQueue();
  }, []);

  useEffect(() => {
    if (status === FillStatus.Filled) {
      // may make sense to move to config for better scalability
      const clearButton = document.querySelector('.clear-completed');

      clearButton?.addEventListener('click', resetQueue);

      return () => {
        clearButton?.removeEventListener('click', resetQueue);
      };
    }
  }, [status]);

  const handleAutofill = () => {
    /*
        Not the best approach performance-wise since it rerenders the whole popup on each status change.
        Not critical in real situations (most forms have less than 10 elements),
        but can be optimized.

        For example, we can use Immer to mutate the state in a more clear and performant way,
        and use it over some state manager to track each element's status individually and rerender only the element, not the queue.

        Still, to remain simplicity I'll leave this solution, it's satisfactory for the task.
    */
    const processQueue = (index = 0) => {
      if (index >= elementsQueue.length) return;

      const item = elementsQueue[index];

      item.status = FillStatus.Filling;
      setElementsQueue([...elementsQueue]);

      setTimeout(() => {
        item.fill();
        item.status = FillStatus.Filled;
        setElementsQueue([...elementsQueue]);

        processQueue(index + 1);
      }, 1500);
    };

    processQueue();
  };

  return { elementsQueue, status, handleAutofill, resetQueue };
};

export default useAutofill;
