import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {  List ,Avatar} from 'antd';
import TxtTag from '../tag'
// import data from './data'
import { connect } from 'react-redux';
import axios from 'axios'


class IndexList extends Component {
    constructor( arg ){
        super( arg );
        this.state = {
            page: 1,
        };
        this.getData(this.props.tab ,this.state.page)

    }
    shouldComponentUpdate( nextProps , nextState ){
        if ( this.state.page !== nextState.page ){
            this.getData( nextProps.tab , nextState.page );
        }
        if ( this.props.tab !== nextProps.tab ) {
            this.getData( nextProps.tab , 1 );
            this.setState({
                page: 1
            })
        }
        return true
    }
    getData(tab,page){
        this.props.dispatch((dispatch)=>{
            axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=20`)
                .then(res=>{
                    dispatch({
                        type: 'LIST_UPDATA_SUCC',
                        data: res.data
                    });
                })
                .catch(e=>{
                    console.log(e);
                })
        })
    }
    render() {
        let { loading , data } = this.props;
        let pagination = {
            current: this.state.page,
            pageSize: 20,
            total:1000,
            onChange:((current)=>{
                // console.log(current);
                this.setState({
                    page: current
                })
            })
        };
        // console.log(data);
        return (
            <div>
                <List
                     loading={loading}
                     dataSource={data}
                     pagination={pagination}
                     renderItem={item=>(

                             <List.Item
                                 actions={[
                                     "回复"+item.reply_count,
                                     "访问"+item.visit_count
                                 ]}
                             >
                                 <List.Item.Meta
                                     className={'pic'}
                                     avatar={
                                         <Avatar src={item.author.avatar_url}/>
                                     }
                                     title={
                                         <div>
                                             <TxtTag data={ item }/>
                                             <Link
                                                 to={'/details/' + item.id}
                                             >{item.title}</Link>
                                         </div>
                                     }
                                     description={
                                         <div>
                                             <Link to={'/user/' + item.author.loginname}>
                                                 {item.author.loginname}发表于：{item.create_at.split('T',1)}
                                             </Link>
                                         </div>
                                     }
                                 >

                                 </List.Item.Meta>
                             </List.Item>
                         )
                     }

                >

                </List>
            </div>

        );
    }
}

export default connect( state => state.list )(IndexList);