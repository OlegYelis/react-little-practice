import React, { useState } from 'react';
import { ControlsWrapper, Controls, Button } from './AddUserForm.styled';

export const AddUserForm = ({ onAddUser, onCheckFields, onCheckAge }) => {
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');

  const submitFormHandler = evt => {
    evt.preventDefault();

    const newUser = { name: inputName, age: inputAge };

    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      onCheckFields(true);
      return;
    }

    if (Number(inputAge) <= 0) {
      onCheckAge();
      return;
    }

    onAddUser(newUser);
    setInputName('');
    setInputAge('');
  };

  const nameChangeHandler = evt => {
    setInputName(evt.target.value);
  };

  const ageChangeHandler = evt => {
    setInputAge(evt.target.value);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <ControlsWrapper>
        <Controls>
          <label>Name</label>
          <input
            type="text"
            value={inputName}
            onChange={nameChangeHandler}
          ></input>
        </Controls>
        <Controls>
          <label>Age</label>
          <input
            type="number"
            value={inputAge}
            onChange={ageChangeHandler}
          ></input>
        </Controls>
        <Button type="submit">Add new user</Button>
      </ControlsWrapper>
    </form>
  );
};
