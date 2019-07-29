import React from 'react';
import {Switch, Route, NavLink, Redirect} from 'react-router-dom';
import Home from '../views/Home';
import Kind from '@/views/Kind';
import Cart from '@/views/Cart';
import User from '@/views/User';
import Find from '@/views/Find';
import NoMatch from '@/views/NoMatch';
const App = () => {
  return (
    <div className = "container">
    {/* <div className = "box">
      <header className = "header">
        头部
      </header>
      <div className = "content">
        内容
      </div>
    </div> */}
      <Switch>
        <Route path = "/home" component = { Home }/>
        <Route path = "/kind" component = { Kind }/>
        <Route path = "/cart" component = { Cart }/>
        <Route path = "/user" component = { User }/>
        <Route path = "/find" component = { Find }/>
        <Redirect exact from ='/' to="/home"/>
        <Route component = { NoMatch }/>
      </Switch>
  <footer className = "footer">
     <ul>
      <NavLink to="/home" >
        <span className = "iconfont icon-gerenzhongxinshouye"></span>
        <p>首页</p>
      </NavLink>
      <NavLink to="/kind" >
        <span className = "iconfont icon-icon_fenleinor"></span>
        <p>分类</p>
      </NavLink>
      <NavLink to="/find" >
        <span className = "iconfont icon-ziyuan"></span>
        <p>发现</p>
      </NavLink>
      <NavLink to="/cart" >
        <span className = "iconfont icon-gouwuche"></span>
        <p>购物车</p>
      </NavLink>
      <NavLink to="/user" >
        <span className = "iconfont icon-gerenzhongxin"></span>
        <p>我的</p>
      </NavLink>
      </ul>
  </footer>
  </div>
  )
}



export default App