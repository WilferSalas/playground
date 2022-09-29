/* eslint-disable no-unused-vars */
// @packages
import { createContext } from 'react';

export interface User {
  [key: string]: boolean
}

export interface Users {
  users: User[];
  onUpdateStatus: (user: string, status: boolean) => void;
}

const UsersContext = createContext({} as Users);

export default UsersContext;
