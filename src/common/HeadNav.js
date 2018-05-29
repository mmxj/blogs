/**
 * Created by webmxjon 2018/5/25.
 */
import React,{Component} from 'react';
import {Menu,Icon} from 'antd'
import './HeadNav.less'
import {Link} from 'react-router-dom'
export default class HeadNav extends Component {
    constructor(props){
        super(props);
        var location=this.props.location.pathname.split('/');
        var currentName=location[location.length-1]?location[location.length-1]:'home';
        this.state = {
            current: currentName,
        }
    }
    handleClick=(e)=>{
        this.setState({current:e.key});
    }
    render(){
        return (
            <div id="HeadNav">
                <div className="nav-wrap">
                    <div className="nav-logo-wrap">
                        <Icon type="global" className="nav-logo" />
                    </div>
                    <div className="nav-list-wrap">
                        <Menu
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                            onClick={this.handleClick}
                        >
                            <Menu.Item key="home">
                                <Link  to="/home">首页</Link>
                            </Menu.Item>
                            <Menu.Item key="about">
                                <Link  to="/home/about">关于我</Link>
                            </Menu.Item>
                            <Menu.Item key="article">
                                <Link to="/home/article">文章分享</Link>
                            </Menu.Item>
                            <Menu.Item key="resource" >
                                <Link to="/home/resource">资源共享</Link>
                            </Menu.Item>
                        </Menu>
                    </div>
                </div>
            </div>
        )
    }

}