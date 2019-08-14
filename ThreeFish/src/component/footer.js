import React, {Component} from 'react';
import { Layout} from 'antd';
import 'antd/dist/antd.css';
class Footer extends Component {
    render() {
        return (
            <div>
                <Layout.Footer style={{textAlign:'center'}}>
                    备案号：津ICP备123121号-1 版权所有：三点鱼
                </Layout.Footer>

            </div>

        );
    }
}

export default Footer;