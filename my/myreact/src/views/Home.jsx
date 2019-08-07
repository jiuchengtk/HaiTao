import React, {Component} from 'react';
import Header from '@/components/Header';
import { Tabs } from 'antd-mobile';
import { Carousel } from 'antd-mobile';
import axios from 'axios'
import Nzlist from '@/components/Nzlist';
import { SearchBar, WhiteSpace } from 'antd-mobile';


export default class extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: ['1', '2', '3'],
      imgHeight: 176,
      nzlist: []
     }
    // this.state = tab =>
    // (<div style={{ display: 'flex', alignItems: 'center', width:'25%',font:'12px/24px ""', justifyContent: 'center', height: '25px', backgroundColor: '#fff' }}>
    //   <p>Content of {tab.title}</p>
    // </div>)
   
  }
  componentDidMount () {
    axios.get('http://10.11.56.162:3000/api/banner').then(res => {
      // console.log(res.data)
      this.setState({
          data:res.data
      })
    })

    axios.get('/api/search').then(res => {
      // console.log(res.data)
      // console.log(res.data.result.wall.list)
      this.setState({
        nzlist: res.data.result.wall.list
      })
    
    })
    
  }
  
  render () {
    const tabs = [
      { title: '首页' },
      { title: '饰品' },
      { title: '男装' },
      { title: '女装' },
      { title: '生鲜' },
      { title: '百货' },
      { title: '箱包' },
      { title: '鞋靴' },
      { title: '食品' },
    ];
    return (
      <div className = "box">
          <header className = "header">
            <Header label="首页"
                onRightClick = { () => {
                  console.log('扫一扫')
                }} 
                left="iHerb"
                right ="扫一扫"
                {...this.props}
                >
                <div>
                    <SearchBar placeholder="Search" maxLength={8} />
                  <WhiteSpace />
                </div>
          </Header>
          </header>
      <div className = "content">
        <Tabs style= {{ height:'25px' }} tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page=   {5} />}>
          {this.renderContent}
        </Tabs>
        <Carousel className="space-carousel"
          frameOverflow="visible"
          cellSpacing={10}
          slideWidth={0.8}
          autoplay
          infinite
        >
          {this.state.data.map((item, index) => (
            <a
              key={index}
              href=""
              style={{
                display: 'block',
                position: 'relative',
                top: this.state.slideIndex === index ? -10 : 0,
                height: this.state.imgHeight,
                boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
              }}
            >
              <img
                src={ item.pic}
                alt=""
                style={{ width: '100%', height:'150px',verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
         </Carousel>
        <div className="tb">
            <ul>
              <li><img src="https://goods4.juancdn.com/jas/181119/7/6/5bf2524bb6f8ea534d206f83_270x241.png?imageMogr2/quality/85!/format/png" alt=""/></li>
              <li> <img src="https://goods8.juancdn.com/jas/181228/f/e/5c25bd0d33b08962a220f3a6_270x241.png?imageMogr2/quality/85!/format/png" alt=""/></li>
              <li><img src="https://goods2.juancdn.com/jas/180201/3/d/5a727415a9fcf8280d24465a_270x241.png?imageMogr2/quality/85!/format/png" alt=""/></li>
              <li><img src="https://goods4.juancdn.com/jas/180917/6/5/5b9f175033b08945a870ad21_270x241.png?imageMogr2/quality/85!/format/png" alt=""/></li>
            </ul>
        </div>
        <div className="th">
          <span></span><p>每周特惠</p><span></span>
        </div>
        <div className="mz">
          <li>
            <img src="https://s11.mogucdn.com/mlcdn/55cf19/190602_897e5ef5l7a0ga129ie1bg1fig3j0_640x960.jpg" alt=""/>
            <p>雪纺碎花小衬潮</p>
            <b>¥49.9</b>
          </li>
          <li>
          <img src="https://s11.mogucdn.com/mlcdn/c45406/190524_311be0cd8ig364207j333d1171gag_640x960.jpg" alt=""/>
            <p>复古上衣潮</p>
            <b>¥39.9</b>
          </li>
          <li>
          <img src="https://s11.mogucdn.com/mlcdn/c45406/190618_83f1f40b215bj4958aii32j7flf71_640x960.jpg" alt=""/>
            <p>菠萝印花背心</p>
            <b>¥59.9</b>
          </li>
        </div> 
        <Nzlist nzlist = { this.state.nzlist } {...this.props}/>      
      </div>

    </div>
    )
  }

}

