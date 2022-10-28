import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Exercicios from "./Pages/Exercicios";
import Cadastro from "./Pages/Cadastro";
import Home from "./Pages/Home";
import Perfil from "./Pages/Perfil";

function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path = "/exercicios" component = {Exercicios}/>
                <Route path = "/login" component = {Login}/>
                <Route path = "/cadastro" component = {Cadastro}/>
                <Route path = "/home" component = {Home}/>
                <Route path = "/perfil" component = {Perfil}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;