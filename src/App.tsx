import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Menu mode='vertical' defaultOpenSubMenus={['3','4']}>
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
			</header>
		</div>
	)
}

export default App
