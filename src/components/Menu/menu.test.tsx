import React from 'react'
import { cleanup, fireEvent, render, RenderResult ,waitFor} from '@testing-library/react'
import Menu, { menuProps } from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'
const testMenuProps: menuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: "test-class",
  style: {
    border: '1px solid red'
  }
}
const verticalProps: menuProps = {
  defaultIndex: '0',
  mode: 'vertical'
}
const generatorComponent = (props: menuProps) => {
  return (
    <Menu {...props}>
      <MenuItem >
        active
      </MenuItem>
      <MenuItem disabled>
        disabled
      </MenuItem>
      <MenuItem >
        333
      </MenuItem>
      <SubMenu title='下拉菜单'>
        <MenuItem>
          444
        </MenuItem>
      </SubMenu>
    </Menu>
  )
}
const createStyleFile=()=>{
  const style=`
    .viking-submenu{
      display:none
    }
    .viking-submenu.menu-opened{
      display:block
    } 
  `
    const styleElement=document.createElement('style')
    // styleElement.type
    styleElement.innerHTML=style
    return  styleElement

}
let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement
describe('test Menu components', () => {
  beforeEach(() => {
    wrapper = render(generatorComponent(testMenuProps))
    wrapper.container.append(createStyleFile())
    menuElement = wrapper.getByTestId('test-menu')
    activeElement = wrapper.getByText('active')
    disabledElement = wrapper.getByText('disabled')

  })
  it('should render correct Menu and MenuItem based on default props', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('viking-menu test-class')
    expect(menuElement.querySelectorAll(':scope > li').length).toEqual(4)
    expect(activeElement).toHaveClass('is-active')
    expect(disabledElement).toHaveClass('is-disabled')
  })
  it('click item  should change active and call the right callback', () => {
    const thirdElement = wrapper.getByText('333')
    fireEvent.click(thirdElement)
    expect(testMenuProps.onSelect).toHaveBeenCalledWith('2')
    expect(thirdElement).toHaveClass('is-active')
    expect(activeElement).not.toHaveClass('is-active')

  })
  it('should have right mode', () => {
    cleanup()
    wrapper = render(generatorComponent(verticalProps))
    menuElement = wrapper.getByTestId('test-menu')
    expect(menuElement).toHaveClass('menu-vertical')
  })
  it('should have  a drop down submenu',async()=>{
   const submenus = wrapper.queryByText('444')
   expect(submenus).not.toBeVisible()
   const dropDownElement=wrapper.getByText('下拉菜单')
   fireEvent.mouseEnter(dropDownElement)
   await waitFor(() => {
    expect(submenus).toBeVisible()
   })
   fireEvent.click(wrapper.getByText('444'))
   expect(testMenuProps.onSelect).toHaveBeenCalledWith('3-0')
   fireEvent.mouseLeave(dropDownElement)
   await waitFor(() => {
    expect(submenus).not.toBeVisible()
   })
  })

})