import React, {Component} from 'react';
import Comment from "./comment";
// import data from './data'
import {Link} from 'react-router-dom'
import TxtTag from '../tag'
import {  Card, Avatar } from 'antd';
import axios from 'axios'
import { connect } from 'react-redux';
class Details extends Component {
    constructor( arg ){
        super( arg );
        let id = this.props.match.params.id;
        this.state = {
            id,
            data: this.props.data,
            loading: this.props.loading
        };
        this.updata(id);
    }
    updata(id){
        this.props.dispatch(dispatch=>{
            axios.get('https://cnodejs.org/api/v1/topic/'+id)
                .then(res=>{
                    dispatch({
                        type: "Details_SUCC",
                        data: res.data
                    });
                })
                .catch(e=>{
                    console.log(e);
                })
        });
    }
    render() {
        const {data,loading} = this.props;
        return (
            <div className={'wrap'}>
                <Card
                    loading = {loading}
                >
                    <Card.Meta
                        title={
                            <div>
                                <h2>{data.title}</h2>
                                <TxtTag data={ data }/>
                                <Avatar src={data.author.avatar_url}/>
                                <Link to={'/user/' + data.author.loginname}>
                                    {data.author.loginname}发表于：{data.create_at.split('T',1)}
                                </Link>
                            </div>
                        }
                    >
                    </Card.Meta>
                    <div dangerouslySetInnerHTML={{
                        __html:data.content
                    }}>

                    </div>
                </Card>
                <Comment
                    replies={data.replies}
                    reply_count={data.reply_count}
                />
            </div>

        );
    }
}

export default connect( state => state.details )(Details);