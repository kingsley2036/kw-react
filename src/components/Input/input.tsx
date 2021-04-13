import React, { ReactElement,FC ,InputHTMLAttributes} from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import classNames from 'classnames'
type inputSize = 'lg' | 'sm'
interface inputProps extends Omit<InputHTMLAttributes<HTMLElement>,'size'>{
	size?: inputSize
	disabled?: boolean
	icon?: IconProp
	prepend?: String | ReactElement
	append?: String | ReactElement
}

export const Input:FC<inputProps> = (props) => {
	const { size, disabled, icon, prepend, append,className,style ,...restProps} = props
  const classes=classNames('viking-input',className,{
    [`btn-${size}`]:size,
    'disabled':disabled
  })
  return (
    <div className={classes} style={style}>
      {prepend?<span>{prepend}</span>:null}
    <input {...restProps}></input>
    {append?<span>{append}</span>:null}
    </div>
    )
}
