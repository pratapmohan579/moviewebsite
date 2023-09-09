
import React from "react";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Error from "./Error";


const App = () => {

    return(
        <>
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movie/:id" element={<SingleMovie/>} /> 
            <Route Path="*" element={<Error />} />
         </Routes>

        </BrowserRouter>
        
        </>
    );
};

export default App;
