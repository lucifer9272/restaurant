import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import RestaurantList from './components/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantCreate from './components/RestaurantCreate';
import RestaurantUpdate from './components/RestaurantUpdate';
import Login from './components/Login';

import Logout from './components/Logout';
function App() {
    return (
        <div className="App">
            <Router>
             
                

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/list" element={<RestaurantList />} />
                    <Route path="/create" element={<RestaurantCreate />} />
                    <Route path="/search" element={<RestaurantSearch propsToPass="YourPropsHere" />} />
                    <Route path="/details" element={<RestaurantDetail />} />
                    <Route path="/update/:id" element={<RestaurantUpdate />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />


                </Routes>
            </Router>
        </div>
    );
}

export default App;
