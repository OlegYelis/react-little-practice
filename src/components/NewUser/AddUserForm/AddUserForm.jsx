import React, { useRef } from 'react';
import { ControlsWrapper, Controls, Button } from './AddUserForm.styled';

export const AddUserForm = ({ onAddUser, onCheckFields, onCheckAge }) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const submitFormHandler = evt => {
    evt.preventDefault();

    const inputUserName = nameInputRef.current.value;
    const inputUserAge = ageInputRef.current.value;

    if (inputUserName.trim().length === 0 || inputUserAge.trim().length === 0) {
      onCheckFields();
      return;
    }

    if (Number(inputUserAge) <= 0) {
      onCheckAge();
      return;
    }

    onAddUser(inputUserName, inputUserAge);
    // NOT RECOMMENDED
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  return (
    <form onSubmit={submitFormHandler}>
      <ControlsWrapper>
        <Controls>
          <label>Name</label>
          <input type="text" ref={nameInputRef}></input>
        </Controls>
        <Controls>
          <label>Age</label>
          <input type="number" ref={ageInputRef}></input>
        </Controls>
        <Button type="submit">Add new user</Button>
      </ControlsWrapper>
    </form>
  );
};
