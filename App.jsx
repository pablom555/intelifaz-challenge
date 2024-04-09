
import React, { useReducer } from 'react';

import UserForm from './UserForm';
import UserList from './UserList';
import UserDetail from './UserDetail';
import { UserProvider } from './userContext/UserContext';

function App() {
  return (
    <div className="app">
      <h1>User Management App</h1>
      <UserProvider>
        <UserForm />
        <UserList />
        <UserDetail />
      </UserProvider>
    </div>
  );
}

export default App;

