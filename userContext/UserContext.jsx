import React, { createContext, useContext, useReducer } from 'react';

export const UserStateContext = createContext(null);
export const UserDispatchContext = createContext({});

const initialState = {
  users: [],
  selectedUser: null,
};

function userReducer(state, action) {
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

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

const useUserState = () => {
  const context = useContext(UserStateContext);

  if (!context) {
    throw new Error(
      'useUserState must be used within a UserProvider',
    );
  }
  return context;
};

const useUserDispatch = () => {
  const context = useContext(UserDispatchContext);

  if (!context) {
    throw new Error(
      'useUserDispatch must be used within a UserProvider',
    );
  }
  return context;
};

export { useUserState, useUserDispatch, UserProvider };
