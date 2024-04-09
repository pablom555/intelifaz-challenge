export const addUser = (dispatch) => (user) => {
  dispatch({
    type: 'addUser',
    payload: user
  });
};

export const deleteUser = (dispatch) => (id) => {
  dispatch({
    type: 'deleteUser',
    payload: id
  });
};

export const selectUser = (dispatch) => (id) => {
  dispatch({
    type: 'selectUser',
    payload: id
  });
};
