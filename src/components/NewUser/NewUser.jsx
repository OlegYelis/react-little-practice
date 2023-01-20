import { InfoModal } from 'components/InfoModal/InfoModal';
import { AddUserForm } from 'components/NewUser/AddUserForm/AddUserForm';
import { useState } from 'react';
import { NewUserWrapper } from './NewUser.styled';

export const NewUser = ({ onAddUser }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [modalTxt, setModalTxt] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const onCheckAge = () => {
    setModalTxt('Age must be greater than 0');
    setModalTitle('Incorrect age');
    setIsOpen(true);
  };

  const onCheckFields = () => {
    setModalTxt('Please fill in all fields');
    setModalTitle('Incorrect input');
    setIsOpen(true);
  };

  return (
    <NewUserWrapper>
      <AddUserForm
        onAddUser={onAddUser}
        onCheckFields={onCheckFields}
        onCheckAge={onCheckAge}
      ></AddUserForm>
      {isOpen && (
        <InfoModal
          title={modalTitle}
          text={modalTxt}
          onClose={setIsOpen}
        ></InfoModal>
      )}
    </NewUserWrapper>
  );
};
