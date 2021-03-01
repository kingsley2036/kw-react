import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps ,ButtonSize,ButtonType} from './button'
const defaultProps={
  onClick:jest.fn()
}
const testProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'klass'
}
const disabledProps = {
  onClick:jest.fn(),
  disabled:true
}
describe('test Button componet',()=>{
  it('should render the correct default button',()=>{
    const wrapper=render(<Button {...defaultProps}>NICE</Button>)
    const element = wrapper.getByText('NICE')
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    fireEvent(element, new MouseEvent('click', {
      bubbles: true,
    }))
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  it('should render the correct component based on different props', () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>)
    const element = wrapper.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn-primary btn-lg klass')
  })
  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(<Button btnType='link' href="http://dummyurl">Link</Button>)
    const element = wrapper.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  })
  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>Nice</Button>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent(element, new MouseEvent('click', {
      bubbles: true,
    }))
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})