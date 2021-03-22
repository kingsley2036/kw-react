import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas,faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import Icon from './components/Icon/icon'
library.add(fas)

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Menu  >
					<MenuItem>111</MenuItem>
					<MenuItem>222</MenuItem>
					<MenuItem>333</MenuItem>
					<SubMenu title="下拉菜单1">
						<MenuItem>子菜单1</MenuItem>
						<MenuItem>子菜单2</MenuItem>
					</SubMenu>
					<SubMenu title="下拉菜单2">
						<MenuItem>子菜单1</MenuItem>
						<MenuItem>子菜单2</MenuItem>
					</SubMenu>
				</Menu>
				{/* <FontAwesomeIcon icon={faCoffee} /> */}
				<Icon  icon='arrow-right' theme='danger'/>
				<Icon  icon='arrow-right' />
			</header>
		</div>
	)
}

export default App
