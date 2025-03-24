import React from 'react';

import { FillStatus } from '../../../types';

import Styled from './index.styled';

import useAutofill from '../../hooks/useAutofill';

const Popup: React.FC = () => {
  const { elementsQueue, status, handleAutofill } = useAutofill();

  const getButtonText = () => {
    if (status === FillStatus.Filling) {
      return 'Filling...';
    }
    if (status === FillStatus.Filled) {
      return 'Filled';
    }
    return 'Autofill Form';
  };

  return (
    <Styled.PopupContainer>
      <Styled.AutofillButton
        onClick={handleAutofill}
        disabled={status !== FillStatus.Unfilled || elementsQueue.length === 0}
      >
        {getButtonText()}
      </Styled.AutofillButton>

      <Styled.Status>Status: {status}</Styled.Status>
      <Styled.ElementsQueue>
        {elementsQueue.map((item) => (
          <Styled.ElementKey key={item.name}>
            {item.name}: {item.status}
          </Styled.ElementKey>
        ))}
      </Styled.ElementsQueue>
    </Styled.PopupContainer>
  );
};

export default Popup;
