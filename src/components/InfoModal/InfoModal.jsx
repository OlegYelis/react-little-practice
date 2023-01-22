import {
  Backdrop,
  ModalTitle,
  ModalTxt,
  ModalWrapper,
  Button,
} from './InfoModal.styled';

export const InfoModal = ({ title, message, onClose }) => {
  const closeModalHandler = evt => {
    if (evt.target.nodeName !== 'BUTTON' && evt.target.id !== 'backdrop') {
      return;
    }

    onClose(false);
  };

  return (
    <Backdrop onClick={closeModalHandler} id="backdrop">
      <ModalWrapper>
        <ModalTitle>{title}</ModalTitle>
        <ModalTxt>{message}</ModalTxt>
        <Button type="button">Close</Button>
      </ModalWrapper>
    </Backdrop>
  );
};
