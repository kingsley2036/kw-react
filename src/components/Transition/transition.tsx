import React, { FC } from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right' //预定义样式
type transitionProps = CSSTransitionProps & { // 约束props
  animation?: AnimationName,
  wrapper?:boolean
}

const transition: FC<transitionProps> = (props) => {
  const { animation, children,classNames,wrapper, ...rest} = props
  return (
    <CSSTransition classNames={classNames?classNames:animation} {...rest}>
      {wrapper?<div>{children}</div>:children}
    </CSSTransition>
  )
} 
transition.defaultProps={
  unmountOnExit:true,
  appear:true
}

export default transition;