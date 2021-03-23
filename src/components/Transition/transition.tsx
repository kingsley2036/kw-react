import React, { FC } from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right' //预定义样式
type transitionProps = CSSTransitionProps & { // 约束props
  animation?: AnimationName
}

const transition: FC<transitionProps> = (props) => {
  const { animation, children,classNames, ...rest} = props
  return (
    <CSSTransition classNames={classNames?classNames:animation} {...rest}>
      {children}
    </CSSTransition>
  )
} 
transition.defaultProps={
  unmountOnExit:true,
  appear:true
}

export default transition;