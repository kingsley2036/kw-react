import React,{CSSProperties, FC,createContext,useState} from 'react'
import classnames from 'classnames'

type MenuMode = 'horizontal' | 'vertical' 
interface menuProps{
  mode:MenuMode,
  defaultIndex?: string;
  className?: string;
  style?: CSSProperties;
  onSelect?: (selectedIndex: string) => void;
}

interface IMenuContext{
  index:string,
  onSelect?:(selectedIndex:string)=>void
}

const MenuContext=createContext<IMenuContext>({index:'0'})
const Menu:FC<menuProps>=(props)=>{
  const  {mode,defaultIndex,className,style,children,onSelect}=props
  const classes = classnames('viking-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  })
  const [ currentActive, setActive ] = useState(defaultIndex)
  const handleClick = (index: string) => {
    setActive(index)
    if(onSelect) {
      onSelect(index)
    }
  }
 const passedContext: IMenuContext = {
  index: currentActive ? currentActive : '0',
  onSelect: handleClick,
}


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