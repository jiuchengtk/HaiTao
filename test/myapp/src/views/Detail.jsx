import React from 'react';
import axios from 'axios';

class Detail extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            title: ''
        }
    }
    componentDidMount () {
        const { props: { match: { params: { id } } } } = this
        axios.get('https://www.daxunxun.com/detail?id=' + id).then(res => {
            const data = res.data
            this.setState({
                title: data[0].title
            })
        })
    }
    render () {
        return (
            <div className = "container">
                <div className = "box">
                    <header className = "header">
                        详情头部
                    </header>
                    <div className = "content">
                        
                        {/* 详情内容 - { this.state.title } */}
                    </div>
                </div>
                <footer className = "footer">
                    底部
                </footer>
            </div>
        )
    }
}

export default Detail
