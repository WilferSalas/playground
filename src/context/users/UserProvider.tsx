// @packages
import React, {
  ReactNode,
  useMemo,
  useReducer,
} from 'react';

// @scripts
import UsersContext from './UsersContext';
import usersReducer, { UPDATE_STATUS } from './usersReducer';

const initialState = {
  Bob: true,
  Gary: true,
  Jessica: true,
  Sam: true,
  Eric: true,
};

interface IUsersProvider {
  children: ReactNode,
}

const UsersProvider = ({ children }: IUsersProvider) => {
  const [state, dispatch] = useReducer(usersReducer, initialState);

  const onUpdateStatus = (user: string, status: boolean) => {
    dispatch({ type: UPDATE_STATUS, payload: { user, status } });
  };

  const contextValue = useMemo(() => ({
    users: state,
    onUpdateStatus,
  }), [state]);

  return (
    <UsersContext.Provider value={contextValue}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
