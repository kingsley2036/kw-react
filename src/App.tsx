import Button from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import {ButtonType,ButtonSize} from './components/Button/button'
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Button autoFocus>默认</Button>
       <Button  btnType={ButtonType.Primary} onClick={()=>{
         console.log('111');
         
       }}>大按钮</Button>
       <Button size={ButtonSize.Small}  btnType={ButtonType.Danger}>小按钮</Button>
       <Button disabled>禁止按钮</Button>
       <Button btnType={ButtonType.Link} href='./  '>link</Button>
        <Menu mode='vertical' onSelect={(index)=>{alert(index)}}>
          <MenuItem index='0'>
          111
          </MenuItem>
          <MenuItem index='1' disabled>
          222
          </MenuItem>
          <MenuItem index='2'>
          333
          </MenuItem>
        </Menu>
      </header>
    </div>
  );
}

export default App;
