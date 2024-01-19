import React, { Fragment } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';

import AlertBox from './components/Alert/AlertBox';
import Navbar from "./components/Navbar/Navbar";
import Dashboard from './components/Dashboard/Dashboard';
import About from "./components/About/About";
import Auth from './components/Auth/Auth';
import PlayBoard from "./components/PlayBoard/PlayBoard";

const App: React.FC = () => {
    return (
        <Router>
            <Fragment>
                {/* <AlertBox /> */}
                <Navbar />
                <Routes>
                    <Route index element={<About />} />
                    <Route path='/home' element={<Dashboard />} />
                    <Route path='/play' element={<PlayBoard />} />
                    <Route path='/login' element={<Auth />} />
                    <Route path='/signup' element={<Auth />} />
                </Routes>
            </Fragment>
        </Router>
    );
}

export default App;