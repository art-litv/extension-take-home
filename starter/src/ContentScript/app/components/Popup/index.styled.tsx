import styled from 'styled-components';

export default {
  PopupContainer: styled.div`
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 2147483647;
    background: white;
    border-radius: 8px;
    padding: 16px;
    width: 280px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    border: 1px solid #e0e0e0;
  `,
  AutofillButton: styled.button`
    width: 100%;
    padding: 12px;
    background: #2563eb;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: #1d4ed8;
    }

    &:disabled {
      background: #94a3b8;
      cursor: not-allowed;
    }
  `,
  Status: styled.div`
    margin-top: 12px;
    text-align: center;
    font-size: 14px;
    color: #64748b;
  `,
  ElementsQueue: styled.div`
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  `,
  ElementKey: styled.div`
    padding: 8px;
    background: #f0f0f0;
    border-radius: 6px;
    margin: 4px 0;
  `,
};
