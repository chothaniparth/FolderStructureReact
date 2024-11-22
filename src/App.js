import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import NotFound from './components/NotFound';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Routes>
                        {/* Public routes */}
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />

                        {/* Protected route */}
                        <Route
                            path="/"
                            element={
                                <PrivateRoute>
                                    <Home />
                                </PrivateRoute>
                            }
                        />

                        {/* 404 Not Found route */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
};

export default App;
