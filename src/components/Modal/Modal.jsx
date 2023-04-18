import { Overlay, ModalWindow } from './Modal.styles';
import { useEffect } from 'react';

export const ModalForm = ({ children, onClose }) => {
  // const { onClose } = props;
  // const onEscapeDown = e => {
  //   if (e.code !== 'Escape') return;
  //   onClose();
  // };

  useEffect(() => {
    const onEscapeDown = e => {
      if (e.code !== 'Escape') return;
      onClose();
    };

    window.addEventListener('keydown', onEscapeDown);
    return () => {
      window.removeEventListener('keydown', onEscapeDown);
    };
  }, [onClose]);

  const handleClick = e => {
    if (e.target.nodeName !== 'DIV') return;
    onClose();
  };

  return (
    <Overlay onClick={handleClick}>
      <ModalWindow>{children}</ModalWindow>
    </Overlay>
  );
};
