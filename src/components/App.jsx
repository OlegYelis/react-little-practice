import { useState } from 'react';
import { NewUser } from './NewUser/NewUser';
import { Users } from './Users/Users';

export const App = () => {
  const [listUsers, setListUsers] = useState([]);

  const addUserHandler = (name, age) => {
    setListUsers(prevUsers => [{ name: name, age: age }, ...prevUsers]);
  };

  return (
    <>
      <NewUser onAddUser={addUserHandler} />
      <Users users={listUsers} />
    </>
  );
};
