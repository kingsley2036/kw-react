import React from 'react'
import {cleanup, fireEvent, render,RenderResult} from '@testing-library/react'
import Menu,{menuProps} from './menu'
import MenuItem from './menuItem'
const testMenuProps:menuProps={
      defaultIndex:'0',
      onSelect:jest.fn(),
      className:"test-class",
      style:{
        border:'1px solid red'
      }
}
const verticalProps:menuProps={
  defaultIndex:'0',
  mode:'vertical'
}
const generatorComponent=(props:menuProps)=>{
    return (
      <Menu {...props}>
      <MenuItem index='0'>
      active
      </MenuItem>
      <MenuItem index='1' disabled>
      disabled
      </MenuItem>
      <MenuItem index='2'>
      333
      </MenuItem>
    </Menu>
    )
}
let wrapper:RenderResult,menuElement:HTMLElement,activeElement:HTMLElement,disabledElement:HTMLElement
describe('test Menu components',()=>{
  beforeEach(()=>{
    wrapper=render(generatorComponent(testMenuProps))
    menuElement=wrapper.getByTestId('test-menu')
    activeElement=wrapper.getByText('active')
    disabledElement=wrapper.getByText('disabled')

  })
  it('should render correct Menu and MenuItem based on default props',()=>{
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('viking-menu test-class')
    expect(menuElement.getElementsByTagName('li').length).toEqual(3)
    expect(activeElement).toHaveClass('is-active')
    expect(disabledElement).toHaveClass('is-disabled')
  })
  it('click item  should change active and call the right callback',()=>{
      const thirdElement=wrapper.getByText('333')
      fireEvent.click(thirdElement)
      expect(testMenuProps.onSelect).toHaveBeenCalledWith('2')
      expect(thirdElement).toHaveClass('is-active')
      expect(activeElement).not.toHaveClass('is-active')

  })
  it('should have right mode ,垂直',()=>{
    cleanup()
    wrapper=render(generatorComponent(verticalProps))
    menuElement=wrapper.getByTestId('test-menu')
    expect(menuElement).toHaveClass('menu-vertical')
  })
})