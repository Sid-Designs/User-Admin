import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children, requiredRole }) => {
    const [role, setRole] = useState('user');
    const [res, setRes] = useState('');
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('id');
    if (!token && !userId) { return <Navigate to='/login' />}
    useEffect(() => {
        setRes(axios.get(`http://localhost:5000/verify/${userId}`).then((res) => setRole(res.data.role)));
    }, [])
    if(requiredRole && requiredRole !== role){
        return <Navigate to='/user' />
    }
    return children;
};

export default ProtectedRoute;
