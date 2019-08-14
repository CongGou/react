import React, {Component} from 'react';
import { Card  , Avatar} from 'antd'
import UserList from './UserList'
import axios from 'axios'
import { connect } from 'react-redux';
class User extends Component {
    constructor( arg ){
        super( arg )
        let id = this.props.match.params.id;
        this.updata(id)
    }
    updata(id){

        this.props.dispatch(dispatch=>{
            axios.get('https://cnodejs.org/api/v1/user/'+id)
                .then(res=>{
                        dispatch({
                            type: 'USER_SUCC',
                            data: res.data
                        })
                })
                .catch(e=>{
                    console.log(e);
                })
        })
    }
    render() {
        let { data , loading } = this.props;
        // console.log(this.props.match.params.id);
        return (
            <div  className={'wrap'}>
                <Card
                    loading={loading}
                >
                    <Card.Meta
                        description={

                            <div>
                                <div className={'TopAvatar'}>
                                    <Avatar src={data.avatar_url}/>
                                </div>
                                <div className={'TopList'}>
                                    <span>用户名：<em className={'font'}>{data.loginname}</em></span>
                                    <span>积分：<em className={'font'}>{data.score}</em></span>
                                    <span>注册时间：<em className={'font'}>{data.create_at.split('T',1)}</em></span>
                                </div>
                            </div>
                        }
                    >
                    </Card.Meta>
                    {/*{recent_replies}*/}
                    {/*recent_topics*/}
                </Card>
                <Card></Card>
                <UserList
                    // loading = {loading}
                    title = "最近创建的话题"
                    data = {data.recent_topics}
                />
                <UserList
                    // loading = {loading}
                    title = "最近回复的话题"
                    data = {data.recent_replies}
                />
            </div>
        );
    }
}

export default connect( state => state.user )(User);