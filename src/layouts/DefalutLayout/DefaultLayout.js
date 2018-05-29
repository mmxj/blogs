/**
 * Created by webmxj on 2018/5/25.
 */
import React,{Component} from 'react';
import HeadNav from '../../common/HeadNav';
import DefaultFoot from '../../common/DefaultFoot';
import './DefaultLayout.less';
import {Route} from 'react-router-dom';
import Home from '../../routes/Home/Home';
import About from '../../routes/About/About';
import Article from '../../routes/Article/Article';
import Resource from '../../routes/Resource/Resource';
export default class DefaultLayout extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return (
            <div id="DefaultLayout">
                <HeadNav match={this.props.match} location={this.props.location} history={this.props.history} />
                <div className="content-wrap">
                    <Route  path={this.props.match.url+'/'} component={Home}  exact/>
                    <Route  path={this.props.match.url+'/about'} component={About}  />
                    <Route  path={this.props.match.url+'/article'} component={Article}  />
                    <Route  path={this.props.match.url+'/resource'} component={Resource}  />
                </div>
                <DefaultFoot/>
            </div>
        )
    }
}