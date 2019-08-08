import React, { Component } from 'react';
import axios from 'axios';
import { SearchBar, Carousel, WingBlank } from 'antd-mobile';


class Home extends Component {
    constructor (props) {
        super(props);
        this.state = {
            img: [],
            data: [],
            title: []
        }
    }

    componentDidMount() {
          axios.get('http://rap2api.taobao.org/app/mock/224886/lei').then((res) => {
              this.setState({
                  img: res.data.lei,
                  title: res.data.list,
                  data: res.data.img
              })
          })
      }
      onChange= (value) => {
        this.setState({ value });
      };
      clear = () => {
        this.setState({ value: '' });
      };
      handleClick = () => {
        this.manualFocusInst.focus();
      }
    
    render () {
        return (
            <div className = "box">
                <header className = "header">
                    <SearchBar placeholder="搜索产品" maxLength={8} />
                </header>
                <div className = "content">
                    <div className = "list">
                        <ul>
                            { this.state.title.map( (itm, idx) => {
                                return (
                                    <li key = { idx }>
                                        <span>{ itm.name }</span>
                                    </li>
                                )
                            } ) }
                        </ul>
                    </div>
                    <div className = "pro">
                        <div className = "banner">
                            <div className = "banners">
                                <WingBlank>
                                    <Carousel
                                    autoplay={true}
                                    infinite={true}
                                    >
                                    {this.state.data.map((val, index) => (
                                        <a
                                        key={index}
                                        href="www"
                                        style={{ display: 'inline-block'}}
                                        >
                                        <img
                                            src={val.url}
                                            alt=""
                                            style={{ width: '100%', verticalAlign: 'top' }}
                                            onLoad={() => {
                                            // fire window resize event to change height
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({ imgHeight: 'auto' });
                                            }}
                                        />
                                        </a>
                                    ))}
                                    </Carousel>
                                </WingBlank>
                            </div>
                        </div>
                        <div className = "shop">
                            <div className = "near">
                                <p>最近查看的</p>
                                <span>维生素</span>
                                <span>我去你大爷</span>
                            </div>
                            <div className = "shophead">
                                <span>补充剂</span>
                                <div>查看全部 > </div>
                            </div>
                            <ul>
                                { this.state.img.map( (item, index) => {
                                    return (
                                        <li key = {index}>
                                        <img src = { item.url } alt = "" />
                                        </li>
                                    )
                                } ) }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home