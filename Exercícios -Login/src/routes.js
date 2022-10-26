import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Exercicios from "./Pages/Exercicios";
import Login from "./Pages/Login";

function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path = "/exercicios" component = {Exercicios}/>
                <Route path = "/login" component = {Login}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;