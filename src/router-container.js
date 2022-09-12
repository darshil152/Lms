import React, { Component } from 'react'

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Addstudent from './addstudent';
import Login from './login';
import Table from './tabel';
import Axios from './axios';
import register from './register';
import Notfound from './notfound';
import Register from './register';

export default class Routercontainer extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Register />}> </Route>
                    <Route path="/register" element={<Register/>}> </Route>
                    <Route path="/login" element={<Login />}> </Route>
                    <Route path="/add-student" element={<Addstudent />}> </Route>
                    <Route path="/view-student" element={<Table />}> </Route>
                    <Route path="/view-axios" element={<Axios />}> </Route>
                    <Route path="*" element={<Notfound />} />
                </Routes>
            </BrowserRouter>
        )
    }
}


