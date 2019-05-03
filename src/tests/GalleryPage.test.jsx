import React from 'react'
import { mount } from 'enzyme'
import GalleryPage from '../views/GalleryPage'

test('should render Full GalleryPage correctly', () => {
  const wrapper = mount(<GalleryPage />)
  expect(wrapper).toMatchSnapshot()
})
