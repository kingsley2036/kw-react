import React,{FC,ButtonHTMLAttributes,AnchorHTMLAttributes} from 'react'
import classNames from 'classnames'


export enum ButtonSize{
    Large='lg',
    Small='sm'
}

export enum ButtonType{
    Primary='primary',
    Default='default',
    Danger='danger',
    Link='link'
}


interface BaseButtonProps{
className?:string,
size?:ButtonSize,
btnType?: ButtonType;
disabled?:boolean,
children: React.ReactNode,
href?: string;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps=NativeButtonProps & AnchorButtonProps

const Button:FC<ButtonProps>=(props)=>{
const {size,btnType,className,children,disabled,href,...restProps}=props
const classes=classNames('btn',className,{
    [`btn-${btnType}`]:btnType,
    [`btn-${size}`]:size,
    'disabled':(btnType==='link') && disabled
})

if(btnType==='link'){
    return (
        <a 
        className={classes}
        href={href}
        {...restProps}
        >
        {children}
      
        </a>
    )
}else{
    return (
        <button className={classes}
        disabled={disabled}
        {...restProps}

        >
                {children}
        </button>
    )
}

}
Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
}

export default Button