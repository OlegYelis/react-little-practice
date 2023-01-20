import { AddUserForm } from 'components/NewUser/AddUserForm/AddUserForm';
import { NewUserWrapper } from './NewUser.styled';

export const NewUser = ({ onAddUser }) => {
  return (
    <NewUserWrapper>
      <AddUserForm onAddUser={onAddUser}></AddUserForm>
    </NewUserWrapper>
  );
};
