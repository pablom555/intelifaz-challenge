
import React, { useReducer } from 'react';

import UserForm from './UserForm';
import UserList from './UserList';
import UserDetail from './UserDetail';

const initialState = {
  users: [],
  selectedUser: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'addUser':
      return { ...state, users: [...state.users, action.payload] };
    case 'deleteUser':
      const updatedUsers = state.users.filter(user => user.id !== action.payload);
      return {
        ...state,
        users: updatedUsers,
        selectedUser: state.selectedUser && state.selectedUser.id === action.payload ? null : state.selectedUser,
      };
    case 'selectUser':
      return { ...state, selectedUser: state.users.find(user => user.id === action.payload)};
    default:
      throw new Error();
  }
}

function App() {
  const [{ users, selectedUser}, dispatch] = useReducer(reducer, initialState);

  const handleAddUser = (user) => {
    dispatch({ type: 'addUser', payload: user });
  };

  const handleDeleteUser = (id) => {
    dispatch({ type: 'deleteUser', payload: id });
  };

  const handleSelectUser = (id) => {
    dispatch({ type: 'selectUser', payload: id });
  };

  return (
    <div className="app">
      <h1>User Management App</h1>
      <UserForm onAddUser={handleAddUser} />
      <UserList users={users} onSelectUser={handleSelectUser} onDeleteUser={handleDeleteUser} />
      {selectedUser && <UserDetail user={selectedUser} />}
    </div>
  );
}

export default App;

