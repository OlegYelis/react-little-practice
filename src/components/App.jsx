import { NewUser } from './NewUser/NewUser';
import { Users } from './Users/Users';

const USERS_LIST = [
  { name: 'Oleg', age: 21 },
  { name: 'Artem', age: 19 },
  { name: 'Vlad', age: 22 },
];

export const App = () => {
  return (
    <>
      <NewUser />
      <Users users={USERS_LIST} />
    </>
  );
};
