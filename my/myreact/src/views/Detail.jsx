import React, {Component} from 'react'
import { NavBar, Icon } from 'antd-mobile';
import axios from 'axios';
import '@/components/detail.scss'

export default class extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title:'',
      img:'',
      price:''
    }
  }
  componentDidMount () {
    console.log(this.props)
    let { props: { match: { params: { iid }}} } = this
    // console.log(iid)
    axios.get('/api/search').then(res => {
      // console.log(res.data)
      console.log(res.data.result.wall.list[0].showLarge.img)
      const dat = res.data.result.wall.list
      // this.setState({
      //   title: data.title,
      //   img: data[0].show.img
      // })

      let data = {}

      dat.map(item => {
        if(item.iid === iid) {
          data = item
        }
        return ''
      })
      console.log(data , '123')
      this.setState({
        title: data.title,
        img: data.showLarge.img,
        price:data.price
      })
    })
  }
  render () {
    return (
      <div className = "box">
      <header className = "header">
          <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => { this.props.history.push('/home/')}}
        ><b>详情页</b></NavBar>
      </header>
      <div className = "content">
          <div className="xq">
            <img src={this.state.img} />
            <b>{ this.state.price}</b>
            <p>{ this.state.title}</p>
          </div>
          <ul className="cs">
              <li>
                <strong>选择 尺码,颜色分类</strong><span>></span>
              </li>
              <li>
              <strong>品牌 适用年龄...</strong><span>></span>
              </li>
          </ul>
          <div className="pj">
            <h3>店铺活动</h3>
            <img src="../assets/img/yh.jpg"/>
          </div>
      </div>
    </div>
    )
  }

}