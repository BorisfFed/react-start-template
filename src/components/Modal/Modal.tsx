import React, { FC } from 'react';
import './Modal.css';

interface ModalProps {
  visible: boolean;
  children: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({ visible, children }) => {
  return (
    <div className={visible ? 'modal visible' : 'modal'}>
      <div className={visible ? 'modal__content modal__content.visible' : 'modal__content'}>
        <div>
          {children}
        </div>
        <button className='modal__button'>
          Закрыть
        </button>
      </div>
      
    </div>
  );
};