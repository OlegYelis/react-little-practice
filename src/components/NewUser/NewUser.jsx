import { InfoModal } from 'components/InfoModal/InfoModal';
import { AddUserForm } from 'components/NewUser/AddUserForm/AddUserForm';
import { useState } from 'react';
import { NewUserWrapper } from './NewUser.styled';

export const NewUser = ({ onAddUser }) => {
  const [error, setError] = useState();

  const onCheckAge = () => {
    setError({
      title: 'Incorrect age',
      message: 'Age must be greater than 0',
    });
  };

  const onCheckFields = () => {
    setError({
      title: 'Incorrect input',
      message: 'Please fill in all fields',
    });
  };

  return (
    <NewUserWrapper>
      <AddUserForm
        onAddUser={onAddUser}
        onCheckFields={onCheckFields}
        onCheckAge={onCheckAge}
      ></AddUserForm>
      {error && (
        <InfoModal
          title={error.title}
          message={error.message}
          onClose={setError}
        ></InfoModal>
      )}
    </NewUserWrapper>
  );
};
