import {
  BackdropWrapper,
  ModalTitle,
  ModalTxt,
  ModalWrapper,
  Button,
} from './InfoModal.styled';
import ReactDOM from 'react-dom';

const Backdrop = ({ onClose }) => {
  return <BackdropWrapper onClick={onClose} id="backdrop"></BackdropWrapper>;
};

const Modal = ({ title, message, onClose }) => {
  return (
    <ModalWrapper>
      <ModalTitle>{title}</ModalTitle>
      <ModalTxt>{message}</ModalTxt>
      <Button type="button" onClick={onClose}>
        Close
      </Button>
    </ModalWrapper>
  );
};

export const InfoModal = ({ title, message, onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById('backdrop')
      )}
      {ReactDOM.createPortal(
        <Modal title={title} message={message} onClose={onClose} />,
        document.getElementById('modal')
      )}
    </>
  );
};
