import React, { Component } from 'react'

class Home extends Component {
    constructor (props) {
        super(props);
        this.state = {}
    }

    componentDidMount () {

    }
    
    render () {
        return (
            <div className = "box">
                <header className = "header">个人头部</header>
                <div className = "content">个人内容</div>
            </div>
        )
    }
}

export default Home