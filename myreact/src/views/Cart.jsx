import React, {Component} from 'react'

export default class extends Component {
  constructor (props) {
    super(props);
  }
  componentDidMount () {
    
  }
  render () {
    return (
      <div className = "box">
      <header className = "header">
       头部
      </header>
      <div className = "content">
       购物车内容
      </div>
    </div>
    )
  }

}