import './App.css';
import React, { useEffect } from 'react';
import { Box } from '@mui/material'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home'
import { fetchAllData } from './redux/actions/post'
import { useDispatch } from 'react-redux';
import Form from './components/form/Form'
import Banner from './components/home/Banner';

function App() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchAllData());
    }, [dispatch])

    return (
        <Box>
            <Navbar />
            <Banner />
            <Form />
            <Home />
        </Box>
    );
}

export default App;
