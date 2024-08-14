import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateVegies from './pages/CreateVegies'
import ShowVegies from './pages/ShowVegies'
import EditVegies from './pages/EditVegies'
import DeleteVegies from './pages/DeleteVegies'
import ManagerLogin from './pages/ManagerLogin'
import Overview from './pages/Overview'


const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />

        </Routes>

    );
}

export default App