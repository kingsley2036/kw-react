import React, {
	CSSProperties,
	FC,
	createContext,
	useState,
	FunctionComponentElement,
} from 'react'
import classnames from 'classnames'
import { MenuItemProps } from './menuItem'

type MenuMode = 'horizontal' | 'vertical'
type onSelectCallback = (selectedIndex: string) => void

export interface menuProps {
	mode?: MenuMode
	defaultIndex?: string
	className?: string
	style?: CSSProperties
	onSelect?: onSelectCallback
}
interface IMenuContext {
	index: string
	onSelect?: onSelectCallback
	mode?: MenuMode
}

export const MenuContext = createContext<IMenuContext>({
	index: '0',
}) // 试一试默认给个空对象可不可以? 不行,会报错
const Menu: FC<menuProps> = (props) => {
	const { mode, defaultIndex, className, style, children, onSelect } = props
	const classes = classnames('viking-menu', className, {
		'menu-vertical': mode === 'vertical',
		'menu-horizontal': mode !== 'vertical',
	})
	const [currentActive, setActive] = useState(defaultIndex)
	const handleClick = (index: string) => {
		setActive(index)
		if (onSelect) {
			onSelect(index)
		}
	}
	const passedContext: IMenuContext = {
		index: currentActive ? currentActive : '0',
		onSelect: handleClick,
		mode: mode,
	}
	const renderChildren = () => {
		return React.Children.map(children, (child, index) => {
			const childElement = child as FunctionComponentElement<MenuItemProps>
			const { displayName } = childElement.type

			if (displayName === 'MenuItem' || displayName === 'SubMenu') {
				return React.cloneElement(childElement, {
					index: `${index}`,
				})
			} else {
				console.error(' Menu has a child which is not MenuItem ')
			}
		})
	}

	return (
		<ul className={classes} style={style} data-testid="test-menu">
			<MenuContext.Provider value={passedContext}>
				{renderChildren()}
			</MenuContext.Provider>
		</ul>
	)
}
Menu.defaultProps = {
	defaultIndex: '0',
	mode: 'horizontal',
}

export default Menu
