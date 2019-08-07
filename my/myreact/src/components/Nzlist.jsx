import React from 'react';
// import { Link } from 'react-router-dom';
import './mslist.scss';
export default (props) => {
  console.log("1",props)
  const { nzlist } = props;
  return (
    <div>
      <h2>买手精选</h2>
        <ul className="list">
          {
          nzlist.map((item, index) => (
          <li key={ index} onClick = { () => {
            props.history.push('/detail/' + item.iid)
          }}>
          <img src={ item.show.img } alt = ""/>
            <p>{ item.title}</p>
            <b>{ item.price}</b>
          </li>
         
          ))
          }
      </ul>
    </div>
  )
}
