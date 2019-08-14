import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import { Layout, Row, Col, Divider , Menu ,Icon } from 'antd';
import 'antd/dist/antd.css';
import Show from './show'
class Header extends Component {
    render() {
        return (
            <div>
                <Layout.Header>
                    <Row className={'wrap'}>
                        <Col md={6}>
                            {/*{显示隐藏导航栏}*/}
                            <Show/>
                        </Col>
                        <Col md={18}>
                            {/*{导航竖线}*/}
                            <Divider
                                type={'vertical'}
                                className={'HeaderDivider'}>
                            </Divider>
                            <Menu mode={'horizontal'} theme={'light'} className={'T-menu'}>
                                <Menu.Item>
                                    <Link to={'/index/all'}><Icon type={'home'}/>首页</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to={'/book'}><Icon type={'book'}/>教程</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to={'/about'}><Icon type={'info-circle-o'}/>关于</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to={'/login'}><Icon type={'user'}/>登录</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <Link to={'/registered'}><Icon type={'solution'}/>注册</Link>
                                </Menu.Item>
                            </Menu>
                        </Col>
                    </Row>
                </Layout.Header>
            </div>

        );
    }
}

export default Header;