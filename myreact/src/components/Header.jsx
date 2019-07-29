import React from 'react';

export default  (props) => {
  console.log("1",props)
  const { label, left, right, onLeftClick, onRightClick } = props
  return (
    <ul>
     <li onClick = { () => {
       if (props.match.path == '/home') {
        console.log('HomePod')
        return
       }
       props.history.goBack();
     }}>{left}</li>
     <li>{ props.children ? props.children :label ? label: '标题'}</li>
     <li onClick = { () => {
       onRightClick()
     }}>{right}</li>
    </ul>
   )
}