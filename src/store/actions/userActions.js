import axios from 'axios';
import {
  LOGIN_USER,
  SIGNUP_USER,
  FETCH_USERS,
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
} from './types';

// Login user
export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/login', userData);
    dispatch({ type: LOGIN_USER, payload: response.data });
    localStorage.setItem('token', response.data.token); // Save token if needed
  } catch (error) {
    console.error('Login failed', error);
  }
};

// Signup user
export const signupUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/signup', userData);
    dispatch({ type: SIGNUP_USER, payload: response.data });
  } catch (error) {
    console.error('Signup failed', error);
  }
};

// Fetch users
export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/users');
    dispatch({ type: FETCH_USERS, payload: response.data });
  } catch (error) {
    console.error('Fetching users failed', error);
  }
};

// Add user
export const addUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/users', userData);
    dispatch({ type: ADD_USER, payload: response.data });
  } catch (error) {
    console.error('Adding user failed', error);
  }
};

// Update user
export const updateUser = (id, updatedData) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/users/${id}`, updatedData);
    dispatch({ type: UPDATE_USER, payload: response.data });
  } catch (error) {
    console.error('Updating user failed', error);
  }
};

// Delete user
export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/users/${id}`);
    dispatch({ type: DELETE_USER, payload: id });
  } catch (error) {
    console.error('Deleting user failed', error);
  }
};
