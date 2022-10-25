import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Login from './pages/Login';
import Exercicios from './pages/Exercicios';
import Perfil from './pages/Perfil'; 

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' element={Login}/>
                <Route path='/' element={Home}/>
                <Route path='/' element={Cadastro}/>
                <Route path='/' element={Exercicios}/>
                <Route path='/' element={Perfil}/>

            </Switch>
        </BrowserRouter>
    )
}

export default Routes; 