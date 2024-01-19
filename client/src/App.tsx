import React, { Fragment } from 'react';
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Navigate
// } from 'react-router-dom';

import About from "./components/About/About";
import Auth from "./components/Auth/Auth";
import Navbar from "./components/Navbar/Navbar";
import PlayBoard from "./components/PlayBoard/PlayBoard";

const App: React.FC = () => {
    return (
        // <Router>
        //     <Fragment>
        //         <Navbar />
        //         <Routes>
        //             <Route index element={<About />} />
        //             <Route path='/play' element={<PlayBoard />} />
        //             <Route path='/auth' element={<Auth />} />
        //         </Routes>
        //     </Fragment>
        // </Router>
        <PlayBoard />
    );
}

export default App;