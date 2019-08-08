import React, { Component } from 'react'

class Home extends Component {
    constructor (props) {
        super(props);
        this.state = {
            prolist: []
        }
    }
    render () {
        return (
            <div className = "box">
                <header className = "header">
                    主页头部
                </header>
                <div className = "content">
                    主页内容
                </div>
            </div>
        )
    }
}

export default Home