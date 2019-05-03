import React from 'react'
import { mount } from 'enzyme'
import AboutPage from '../views/AboutPage'

test('should render AboutPage correctly', () => {
  const wrapper = mount(<AboutPage />)
  expect(wrapper).toMatchSnapshot()
})
