import React, {Component} from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
import  Index from '../component/index'
import  Book from '../component/book'
import  About from '../component/about'
import  User from '../component/user'
import Login from '../component/login/login'
import Register from '../component/login/register'
import  Details from '../component/details'



class RouterIndex extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={'/'} render={()=>(
                        <Redirect to={'/index/all'} />
                    )}
                    />
                    <Route path={'/index/:id'} component={Index}/>
                    <Route path={'/book'} component={Book}/>
                    <Route path={'/about'} component={About}/>
                    <Route path={'/user/:id'} component={User}/>
                    <Route path={'/login'} component={Login}/>
                    <Route path={'/registered'} component={Register}/>
                    <Route path={'/details/:id'} component={Details}/>
                </Switch>

            </div>
        );
    }
}

export default RouterIndex;