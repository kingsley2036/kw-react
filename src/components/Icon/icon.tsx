import React,{FC} from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon,FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'

export interface IconProps extends FontAwesomeIconProps {
    theme?:ThemeProps
}
const  Icon:FC<IconProps>=(props)=>{
    const {className,theme,...rest}=props
    const classes=classNames('viking-icon',className,{
      [`icon-${theme}`]:theme
    })
    return (
        <FontAwesomeIcon  className={classes} {...rest}/>
    )
} 
export default Icon