import {createContext} from 'react';

/*
Not used yet. Trying to configure user logging in
an authenticating their login through the database
 */

const AuthContext = createContext({
  token: null,
  login: () => {},
  logout: () => {}
});

export default AuthContext;