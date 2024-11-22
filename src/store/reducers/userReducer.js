import {
    LOGIN_USER,
    SIGNUP_USER,
    FETCH_USERS,
    ADD_USER,
    UPDATE_USER,
    DELETE_USER,
  } from '../actions/types';
  
  const initialState = {
    user: null,
    users: [],
    token: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_USER:
        return { ...state, user: action.payload, token: action.payload.token };
      case SIGNUP_USER:
        return { ...state, user: action.payload };
      case FETCH_USERS:
        return { ...state, users: action.payload };
      case ADD_USER:
        return { ...state, users: [...state.users, action.payload] };
      case UPDATE_USER:
        return {
          ...state,
          users: state.users.map((user) =>
            user.id === action.payload.id ? action.payload : user
          ),
        };
      case DELETE_USER:
        return {
          ...state,
          users: state.users.filter((user) => user.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  