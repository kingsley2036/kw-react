import Button from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'

import { ButtonType, ButtonSize } from './components/Button/button'
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Menu mode='vertical'>
					<MenuItem>111</MenuItem>
					<MenuItem>222</MenuItem>
					<MenuItem>333</MenuItem>
					<SubMenu title="下拉菜单">
						<MenuItem>子菜单1</MenuItem>
						<MenuItem>子菜单2</MenuItem>
					</SubMenu>
				</Menu>
			</header>
		</div>
	)
}

export default App
