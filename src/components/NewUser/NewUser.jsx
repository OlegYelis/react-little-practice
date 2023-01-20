import { AddUserForm } from 'components/NewUser/AddUserForm/AddUserForm';
import { NewUserWrapper } from './NewUser.styled';

export const NewUser = () => {
  return (
    <NewUserWrapper>
      <AddUserForm></AddUserForm>
    </NewUserWrapper>
  );
};
