import React from 'react'
import { Router, Switch, Route } from 'react-router';
import { history } from './history';

//Importação de Paginas
import Home from '../src/pages/home';
import Error404 from '../src/pages/404';
import PrivateRoute from './PrivateRoute';
import Logado from '../src/pages/logged';

const Routes = () => (
    <Router history={ history }>
        <Switch>
            <Route path="/" exact component={ Home }/>
            <PrivateRoute path="/logado" exact component={ Logado }/>
            <PrivateRoute component={Error404}/>
        </Switch>
    </Router>
)

export default Routes