import React, { Component } from 'react'

class Find extends Component {
    constructor (props) {
        super(props);
        this.state = {}
    }

    componentDidMount () {

    }
    
    render () {
        return (
            <div className = "box">
                <header className = "header">发现头部</header>
                <div className = "content">发现内容</div>
            </div>
        )
    }
}

export default Find