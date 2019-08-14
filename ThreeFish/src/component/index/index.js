import React, {Component} from 'react';
import IndexList from './IndexList'
import IndexMenu from './IndexMenu'
import {  Row, Col } from 'antd';
import 'antd/dist/antd.css';
class Index extends Component {
    render() {
        // console.log(this.props.match.params.id);
        let tab = this.props.match.params.id;
        return (
            <Row className={'wrap'}>
                <Col md={6}>
                    <IndexMenu />
                </Col>
                <Col md={18} className={'IndexList'}>
                    <IndexList
                        tab={tab}
                    />
                </Col>
            </Row>

        )
    }
}

export default Index;