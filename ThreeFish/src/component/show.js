import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {  Button , Drawer , Icon } from 'antd';
class Show extends Component {
    constructor( arg ){
        super( arg )
        this.state={
            Show: false
        }
    }
    onClick=()=>{
        this.setState({
            Show : !this.state.Show
        })
    };
    onClose=()=>{
        this.setState({
            Show : false
        })
    };
    render() {
        return (
            <div className={'nav-box'}>
                <h1 className={'logo'}>ThreeFish</h1>
                <div className={'TopNav'}>
                    <Button icon="menu" onClick={this.onClick}></Button>
                    <Drawer
                        placement="right"
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.Show}
                    >
                        <p>
                            <Link to={'/index/all'} onClick={this.onClick}>
                                <Icon type={'home'}/> 首页
                            </Link>
                        </p>
                        <p>
                            <Link to={'/book'} onClick={this.onClick}>
                                <Icon type={'book'}/> 教程
                            </Link>
                        </p>
                        <p>
                            <Link to={'/about'} onClick={this.onClick}>
                                <Icon type="exclamation-circle"/> 关于
                            </Link>
                        </p>
                        <p>
                            <Link to={'/login'} onClick={this.onClick}>
                                <Icon type="user" /> 登录
                            </Link>
                        </p>
                        <p>
                            <Link to={'/registered'} onClick={this.onClick}>
                                <Icon type="solution" /> 注册
                            </Link>
                        </p>
                    </Drawer>
                </div>

            </div>

        );
    }
}

export default Show;