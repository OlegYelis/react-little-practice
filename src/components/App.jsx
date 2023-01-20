import { useState } from 'react';
import { NewUser } from './NewUser/NewUser';
import { Users } from './Users/Users';

const USERS_LIST = [
  { name: 'Oleg', age: 21 },
  { name: 'Artem', age: 19 },
  { name: 'Vlad', age: 22 },
];

export const App = () => {
  const [listUsers, setListUsers] = useState(USERS_LIST);

  const addUserHandler = user => {
    setListUsers(prevUsers => [user, ...prevUsers]);
  };

  return (
    <>
      <NewUser onAddUser={addUserHandler} />
      <Users users={listUsers} />
    </>
  );
};
