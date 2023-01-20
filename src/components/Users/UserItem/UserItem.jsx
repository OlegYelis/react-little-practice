import { UserItemWrapper } from './UserItem.styled';

export const UserItem = ({ name, age }) => {
  return <UserItemWrapper>{name + ' - ' + age}</UserItemWrapper>;
};
