import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import loadable from './utils/loadable'

const Home = loadable(() => import('./pages/Home'));
const Login = loadable(() => import('./pages/Login'));
// const NotFound = loadable(() => import('@/pages/Exception/404'));

const defaultRoutes = [
    <Route exact path="/" component={Home} />,
    <Route key="home" exact path="/home" component={Home} />,
    <Route key="login" exact path="/login" component={Login} />,
    // <Route key="404" exact component={NotFound} />,
    <Redirect to={"/home"} />
]

export default defaultRoutes