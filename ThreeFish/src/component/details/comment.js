import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {  List ,Avatar} from 'antd';

class Comment extends Component {
    render() {
        let {replies} = this.props;
        return (
            <div>
                <List
                    loading={false}
                    dataSource={replies}
                    renderItem={item=>(
                        <List.Item
                            extra={
                                item.ups.length>0?<span className={'CommentList'}>{item.ups.length}个人赞了这条回复</span>:''
                            }
                            key={item.id}
                        >
                            <List.Item.Meta
                                className={'pic'}
                                avatar={
                                    <Avatar src={item.author.avatar_url}/>
                                }
                                description={
                                    <div>
                                        <Link to={'/user/' + item.author.loginname}>
                                            {item.author.loginname}发表于：{item.create_at.split('T',1)}
                                        </Link>
                                        <div dangerouslySetInnerHTML={{
                                            __html:item.content
                                        }}>

                                        </div>
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

export default Comment;