import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact component={Home}></Route>
                <Route path="/:id" component={Detail}></Route>
            </Routes>
        </BrowserRouter>

    );
}

export default App;