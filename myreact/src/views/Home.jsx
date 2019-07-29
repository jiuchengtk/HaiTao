import React, {Component} from 'react';
import Header from '@/components/Header';


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
        <Header label="首页"
            onRightClick = { () => {
              console.log('扫一扫')
            }} 
            right ="扫一扫"
            {...this.props}
            >
            <div style = {{backgroundColor: '#fff'}}><input type="text" className="txt" style={{ border: 'none'}}/></div>
      </Header>
      </header>
      <div className = "content">
        
      </div>
    </div>
    )
  }

}

