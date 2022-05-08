import React from 'react'
import { variant } from '@styled-system/css'
//IMAGE//
import CheckedImg from './image/checked.jpg';
const boxVariant= {
checked:{
    background: '#7b0000',
    border: '2px solid #7b0000',
    transition:{duration:0.1},
}
}
function CheckButton({checked,handleCheck}) {
  return (
  <div 
  variant={boxVariant}
  ><img src={CheckedImg} onClick={() => handleCheck()} />
    </div>
  )
}

export default CheckButton
