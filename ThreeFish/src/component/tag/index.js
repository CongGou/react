import React, {Component} from 'react';
import { Tag } from 'antd'
// import data from './data'
const tab = {
    top:{
        color: 'red',
        txt: '置顶',
    },
    good:{
        color: 'geekblue',
        txt: '精华',
    },
    ask:{
        color: 'orange',
        txt: '问答',
    },
    share:{
        color: 'green',
        txt: '分享',
    },
    job:{
        color: 'cyan',
        txt: '招聘',
    },
    dev:{
        color: 'lime',
        txt: '测试',
    }
};

function getTab(data) {
    // console.log(data);
    return(
        data.top ? 'top':
            data.good?'good':
                data.tab
    )
}

class TxtTag extends Component {
    render() {
        let NowTab = tab[getTab(this.props.data)];
        // console.log(NowTab);
        return (
            // getTab(this.props.data.tab)
            <Tag color={NowTab.color}>{NowTab.txt}</Tag>
        );
    }
}

export default TxtTag;