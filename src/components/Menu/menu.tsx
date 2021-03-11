import React,{CSSProperties, FC,createContext,useState} from 'react'
import classnames from 'classnames'

type MenuMode = 'horizontal' | 'vertical' 
type onSelectCallback=(selectedIndex:string)=>void

interface menuProps{
  mode:MenuMode,
  defaultIndex?: string;
  className?: string;
  style?: CSSProperties;
  onSelect?: onSelectCallback
}

// interface IMenuContext{
//   index:string,
//   onSelect?:(selectedIndex:string)=>void
// }

interface IMenuContext{
    index:string,
    onSelect?:onSelectCallback
}
// const  MenuContext=createContext<IMenuContext>({
//   index:'0'
// })

export const MenuContext=createContext<IMenuContext>({
  index:'0'
})  // 试一试默认给个空对象可不可以? 不行,会报错
const Menu:FC<menuProps>=(props)=>{
  const  {mode,defaultIndex,className,style,children,onSelect}=props
  const classes = classnames('viking-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  })
  const [currentActive, setActive ] = useState(defaultIndex)
  const handleClick=(index:string)=>{
        setActive(index)
        if(onSelect){
          onSelect(index)
        }
    } 
    const  passedContext:IMenuContext={
      index:currentActive?currentActive:'0',
      onSelect:handleClick
    }

//  const passedContext: IMenuContext = {
//   index: currentActive ? currentActive : '0',
//   onSelect: handleClick,
// }


  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
      {children}
      </MenuContext.Provider>
    </ul>
  )
}
Menu.defaultProps={
  defaultIndex:'0' ,
  mode:"horizontal"
}

export default Menu