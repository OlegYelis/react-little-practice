import { UserItem } from './UserItem/UserItem';
import { List, UsersWrapper } from './Users.styled';

export const Users = ({ users }) => {
  return (
    <UsersWrapper>
      <List>
        {users.map((user, index) => (
          <UserItem name={user.name} age={user.age} key={index} />
        ))}
      </List>
    </UsersWrapper>
  );
};
