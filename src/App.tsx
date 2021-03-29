import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas,faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import Icon from './components/Icon/icon'
import Button from './components/Button/button'
import React, { useState } from 'react'
import  Transition from './components/Transition/transition'

library.add(fas)

function App() {
	const [show,setShow]=useState(true)
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
				<Button onClick={()=>{
					setShow(!show)
				}}>点击</Button>
				<Transition in={show} timeout={300}  animation='zoom-in-left'>
					<div>
					<p>1112222222222222222222222222</p>
					<p>111333333333333333</p>
					<p>111111111111111</p>
					{/* <Button>哈哈哈</Button> */}
					</div>
				</Transition>
				<Transition in={show} timeout={300}  animation='zoom-in-right' wrapper>
					<Button>哈哈哈</Button>
				</Transition>
			</header>
		</div>
	)
}

export default App
