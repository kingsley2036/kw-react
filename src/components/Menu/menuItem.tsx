import React, { Children, FC, useContext } from 'react'
import classNames from 'classnames'
// import { MenuContext } from './menu'
export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem:FC<MenuItemProps>=(props)=>{
  const  {index,disabled,className,style,children}=props
  const classse=classNames('menu-item',className,{
    'is-disabled': disabled,
  })
  return (
    <li className={classse} style={style}>
      {children}
    </li>
  )
}

export default  MenuItem