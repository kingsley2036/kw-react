import Button from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Button autoFocus>默认</Button>
       <Button size='lg' btnType='primary' onClick={()=>{
         console.log('111');
         
       }}>大按钮</Button>
       <Button size='sm'  btnType='danger'>小按钮</Button>
       <Button disabled>禁止按钮</Button>
       <Button btnType='link' href='./styles'>link</Button>
        <Menu mode='vertical'>
          <MenuItem>
          111
          </MenuItem>
          <MenuItem>
          222
          </MenuItem>
          <MenuItem>
          333
          </MenuItem>
        </Menu>
      </header>
    </div>
  );
}

export default App;
