/**
 * Created by webmxj on 2018/5/25.
 */
import React,{Component} from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import DefaultLayout from './layouts/DefalutLayout/DefaultLayout'
import LoginUser from './layouts/LoginUser/LoginUser'
export default class RouterWrap extends Component{
    render(){
        return (
            <div id="router">
                <HashRouter>
                    <Switch>
                        <Route path="/" component={LoginUser} exact />
                        <Route path="/home" component={DefaultLayout} />
                        {/*<Route path='*' component={LoginUser} />*/}
                        {/*<Redirect from='*' to='/404' />*/}
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}