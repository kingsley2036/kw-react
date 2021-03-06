import React, {
	FC,
	useContext,
	FunctionComponentElement,
	useState,
} from 'react'
import { MenuContext } from './menu'
import classnames from 'classnames'
import { MenuItemProps } from './menuItem'
import { CSSTransition } from 'react-transition-group'
import  Transition from '../Transition/transition'
import Icon from '../Icon/icon'

export interface subMenuProps {
	index?: string
	className?: string
	title: string
}

const SubMenu: FC<subMenuProps> = (props) => {
	const { index, className, title, children } = props
	const context = useContext(MenuContext)
	const opnenMenus = context.defaultOpenSubMenus as Array<string>
	const isOpened = index && context.mode === 'vertical' ? opnenMenus.includes(index) : false
	const [menuOpen, setMenuOpen] = useState(isOpened)
	const classes = classnames('menu-item submenu-item', className, {
		'is-active': context.index === index,
	})
	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault()
		setMenuOpen(!menuOpen)
	}
	let timer: any
	const handleMove = (e: React.MouseEvent, toggle: boolean) => {
		clearTimeout(timer)
		timer = setTimeout(() => {
			setMenuOpen(toggle)
		}, 300)
	}
	const clickEvents =
		context.mode === 'vertical'
			? {
				onClick: handleClick,
			}
			: {}
	const hoverEvents = context.mode !== 'vertical' ? {
		onMouseEnter: (e: React.MouseEvent) => { handleMove(e, true) },
		onMouseLeave: (e: React.MouseEvent) => { handleMove(e, false) },
	} : {}

	const renderChildren = () => {
		const subMenuClasses = classnames('viking-submenu', {
			// 'menu-opened': menuOpen,
		})
		const childrenComponent = React.Children.map(children, (child, i) => {
			const childElement = child as FunctionComponentElement<MenuItemProps>
			const { displayName } = childElement.type
			if (displayName === 'MenuItem') {
				return React.cloneElement(childElement, {
					index: `${index}-${i}`,
				})
			} else {
				console.error('SubMenu has a child which is not MenuItem ')
			}
		})
		return (
			<Transition in={menuOpen} timeout={300}  animation='zoom-in-bottom'>
				<ul className={subMenuClasses}>{childrenComponent}</ul>
			</Transition>
		)
	}

	return (
		<li className={classes} key={index} {...hoverEvents}>
			<div className="submenu-title" {...clickEvents}>
				{title}
				<Icon icon="angle-down" className="arrow-icon"/>
			</div>
			{renderChildren()}
		</li>
	)
}
SubMenu.displayName = 'SubMenu'
export default SubMenu

 // 默认展开