import React, {Component} from 'react';
import {  Card} from 'antd';
import data from './data'
class About extends Component {
    render() {
        return (
            <div className={'wrap'}>
                {
                    data.map((item,index)=>{
                        return (
                            <Card
                                key={index}
                                title={item.title}
                                type='inner'
                            >
                                <div dangerouslySetInnerHTML={{
                                    __html:item.content
                                }}>

                                </div>
                            </Card>
                        )
                    })
                }
            </div>

        );
    }
}

export default About;