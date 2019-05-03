import React from 'react'
import { mount } from 'enzyme'
import HomePage from '../views/HomePage'

test('should render HomePage correctly', () => {
  const wrapper = mount(<HomePage />)
  expect(wrapper).toMatchSnapshot()
})
